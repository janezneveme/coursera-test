export function renderInvoiceMeta(container) {
  container.innerHTML = `
    <h3>Podatki računa</h3>
    <div class="form-grid">
      <label>
        Številka računa
        <input id="invoice-number" type="text" value="2026-001" />
      </label>
      <label>
        Datum izdaje
        <input id="invoice-date" type="date" />
      </label>
      <label>
        Datum zapadlosti
        <input id="due-date" type="date" />
      </label>
      <label>
        Način plačila
        <select id="payment-method">
          <option>TRR nakazilo</option>
          <option>Gotovina</option>
          <option>Kartica</option>
        </select>
      </label>
    </div>
  `;

  const today = new Date();
  const due = new Date(today);
  due.setDate(today.getDate() + 14);

  container.querySelector('#invoice-date').valueAsDate = today;
  container.querySelector('#due-date').valueAsDate = due;
}

export function renderPartyDetails(container) {
  container.innerHTML = `
    <h3>Izdajatelj in stranka</h3>
    <div class="stack">
      <div class="sub-card">
        <h4>Tvoji podatki (s.p.)</h4>
        <div class="form-grid single-col">
          <label>Ime podjetja<input type="text" id="issuer-name" placeholder="Moje podjetje s.p." /></label>
          <label>Naslov<input type="text" id="issuer-address" placeholder="Ulica 1, 1000 Ljubljana" /></label>
          <label>Davčna številka<input type="text" id="issuer-tax" placeholder="SI12345678" /></label>
          <label>TRR<input type="text" id="issuer-iban" placeholder="SI56 0000 0000 0000 000" /></label>
        </div>
      </div>
      <div class="sub-card">
        <h4>Podatki stranke</h4>
        <div class="form-grid single-col">
          <label>Naziv stranke<input type="text" id="client-name" placeholder="Podjetje d.o.o." /></label>
          <label>Naslov stranke<input type="text" id="client-address" placeholder="Poslovna cesta 3, 2000 Maribor" /></label>
          <label>Davčna / ID številka<input type="text" id="client-tax" placeholder="SI87654321" /></label>
          <label>E-pošta<input type="email" id="client-email" placeholder="racuni@stranka.si" /></label>
        </div>
      </div>
    </div>
  `;
}

export function renderNotes(container) {
  container.innerHTML = `
    <h3>Opombe</h3>
    <label>
      Dodatne opombe na računu
      <textarea id="invoice-notes" rows="8" placeholder="Hvala za zaupanje! Rok plačila je 14 dni."></textarea>
    </label>
    <button id="print-invoice" class="button">Izvozi / Natisni račun</button>
  `;
}
