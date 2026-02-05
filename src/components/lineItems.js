import { formatCurrency, roundCurrency } from '../utils/currency.js';

export function createLineItemsModule(container, onTotalsChange) {
  container.innerHTML = `
    <div class="line-items-header">
      <h3>Postavke računa</h3>
      <button id="add-item" class="button">+ Dodaj postavko</button>
    </div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Opis</th>
            <th>Količina</th>
            <th>Cena / enoto</th>
            <th>DDV</th>
            <th>Skupaj</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="line-items-body"></tbody>
      </table>
    </div>
  `;

  const body = container.querySelector('#line-items-body');
  const template = document.querySelector('#line-item-template');

  function addRow(initial = {}) {
    const node = template.content.firstElementChild.cloneNode(true);
    const description = node.querySelector('[name="description"]');
    const quantity = node.querySelector('[name="quantity"]');
    const unitPrice = node.querySelector('[name="unitPrice"]');
    const vatRate = node.querySelector('[name="vatRate"]');

    description.value = initial.description ?? '';
    quantity.value = initial.quantity ?? 1;
    unitPrice.value = initial.unitPrice ?? '0.00';
    vatRate.value = String(initial.vatRate ?? 22);

    node.addEventListener('input', recalculate);
    node.querySelector('[data-action="remove"]').addEventListener('click', () => {
      node.remove();
      recalculate();
    });

    body.appendChild(node);
    recalculate();
  }

  function collectRows() {
    return [...body.querySelectorAll('tr')].map((row) => {
      const quantity = Number(row.querySelector('[name="quantity"]').value || 0);
      const unitPrice = Number(row.querySelector('[name="unitPrice"]').value || 0);
      const vatRate = Number(row.querySelector('[name="vatRate"]').value || 0);
      const net = roundCurrency(quantity * unitPrice);
      const vat = roundCurrency((net * vatRate) / 100);
      const total = roundCurrency(net + vat);
      row.querySelector('.line-total').textContent = formatCurrency(total);

      return {
        description: row.querySelector('[name="description"]').value,
        quantity,
        unitPrice,
        vatRate,
        net,
        vat,
        total,
      };
    });
  }

  function recalculate() {
    const items = collectRows();
    const totals = items.reduce(
      (acc, item) => {
        acc.net += item.net;
        acc.vat += item.vat;
        acc.total += item.total;
        return acc;
      },
      { net: 0, vat: 0, total: 0 },
    );

    onTotalsChange({
      items,
      net: roundCurrency(totals.net),
      vat: roundCurrency(totals.vat),
      total: roundCurrency(totals.total),
    });
  }

  container.querySelector('#add-item').addEventListener('click', () => addRow());

  addRow({ description: 'Spletno svetovanje', quantity: 1, unitPrice: 120.0, vatRate: 22 });

  return {
    getItems: collectRows,
    addRow,
  };
}
