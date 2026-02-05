import { formatCurrency } from '../utils/currency.js';

export function createSummaryModule(container) {
  container.innerHTML = `
    <h3>Povzetek</h3>
    <dl class="summary-list">
      <div><dt>Osnova</dt><dd id="sum-net">0,00 €</dd></div>
      <div><dt>DDV</dt><dd id="sum-vat">0,00 €</dd></div>
      <div class="summary-total"><dt>Skupaj za plačilo</dt><dd id="sum-total">0,00 €</dd></div>
    </dl>
  `;

  const netNode = container.querySelector('#sum-net');
  const vatNode = container.querySelector('#sum-vat');
  const totalNode = container.querySelector('#sum-total');

  return {
    renderTotals(totals) {
      netNode.textContent = formatCurrency(totals.net);
      vatNode.textContent = formatCurrency(totals.vat);
      totalNode.textContent = formatCurrency(totals.total);
    },
  };
}
