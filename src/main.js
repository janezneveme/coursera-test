import { renderInvoiceMeta, renderNotes, renderPartyDetails } from './components/formSections.js';
import { createLineItemsModule } from './components/lineItems.js';
import { createSummaryModule } from './components/summary.js';

const summary = createSummaryModule(document.querySelector('#summary'));
renderInvoiceMeta(document.querySelector('#invoice-meta'));
renderPartyDetails(document.querySelector('#party-details'));
renderNotes(document.querySelector('#notes'));

const lineItems = createLineItemsModule(document.querySelector('#line-items'), (totals) => {
  summary.renderTotals(totals);
});

function gatherDraft() {
  return {
    invoiceNumber: document.querySelector('#invoice-number').value,
    invoiceDate: document.querySelector('#invoice-date').value,
    dueDate: document.querySelector('#due-date').value,
    paymentMethod: document.querySelector('#payment-method').value,
    issuerName: document.querySelector('#issuer-name').value,
    issuerAddress: document.querySelector('#issuer-address').value,
    issuerTax: document.querySelector('#issuer-tax').value,
    issuerIban: document.querySelector('#issuer-iban').value,
    clientName: document.querySelector('#client-name').value,
    clientAddress: document.querySelector('#client-address').value,
    clientTax: document.querySelector('#client-tax').value,
    clientEmail: document.querySelector('#client-email').value,
    notes: document.querySelector('#invoice-notes').value,
    items: lineItems.getItems(),
    savedAt: new Date().toISOString(),
  };
}

document.querySelector('#save-draft').addEventListener('click', () => {
  localStorage.setItem('racunko-draft', JSON.stringify(gatherDraft()));
  alert('Osnutek računa je shranjen lokalno.');
});

document.querySelector('#print-invoice').addEventListener('click', () => {
  window.print();
});
