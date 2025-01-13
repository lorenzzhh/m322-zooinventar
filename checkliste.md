# Checkliste

## 1. Designanforderungen

- [x] a. Das "Zoo"-Logo entspricht dem Wireframe (CSS, kein Bild 😉).
- [x] b. Es wird eine eigene Farbpalette verwendet und die primary-Color wird auf Primärelemente angewendet.
- [x] c. Die Tabelle hat alle 4 Attribute.
- [ ] d. Datum und Preis sind in der Tabelle und für die Schweiz sinnvoll formatiert.
- [x] e. Der "+"-Button ist floating entsprechend dem Wireframe.
- [x] f. Das Formular öffnet als Dialog/PopUp. Es ist schliessbar durch Click in den Background und Click auf einen "
  Cancel"-Button.
- [x] g. Das Formular ist beim Öffnen immer leer und fehlerfrei.
- [ ] h. Optionale Felder sind markiert, required Felder nicht (Designlab #2).
- [x] i. Es wird ein one-column Layout verwendet (Designlab #7).
- [x] j. Labels sind in oder über dem Form-Element (Designlab #8, #10).
- [ ] k. Erlaube native Date-Picker auf Mobile (Designlab #13).
- [ ] l. Das deutsche Datumsformat DD.MM.YYYY wird verwendet (leider). Das Datum kann gelöscht werden.
- [x] m. Der "Send"-Button hat eine sinnvolle Beschreibung (Designlab #16, #17).
- [ ] n. Nutze Placeholders wenn das Inputformat nicht klar ist (z.B. bei Datum, Designlab #21).
- [x] o. Zeige eine Confirmation-Message nach dem Hinzufügen eines Tieres (Designlab #24).
- [x] p. Jeder Input gibt hilfreiche Fehlermeldungen bereits während dem Tippen/Modifizieren (Designlab #26). Auch
  unterschiedliche je Input (Designlab #29).
- [ ] q. Der "Send"-Button ist nur aktiv, wenn genügend Attribute korrekt ausgefüllt wurden (Designlab #30).
- [x] r. Valider Input wird bestätigt (z.B. mit einem Häkchen, Designlab #28).
- [ ] s. Es gibt ein Hinweis, weshalb der "Send"-Button inaktiv ist.
- [ ] t. Elemente "springen" nicht (ein Feld ändert seine Position nicht).

## 2. Accessibilityanforderungen

- [x] a. Die Wahl der Farbpalette hat einen genügend grossen Kontrast.
- [x] b. Header und Content ist getrennt (für einen Screenreader).
- [x] c. Klickbare Elemente sind für einen Screenreader erkennbar.
- [x] d. Die Tab-Reihenfolge ist sinnvoll.
- [x] e. Form-Submit ist auch möglich mit der Enter-Taste.
- [x] f. Es ist für Screenreader ersichtlich, dass der "Send"-Button inaktiv ist.

## 3. Codeanforderungen

- [ ] a. Es werden wiederverwendbare Komponenten verwendet (z.B. für die Checkbox).
- [ ] b. Es werden kleine Komponenten verwendet (<100 Zeilen).
- [ ] c. Code ist auto-formatiert und ohne eslint-Warnings.
- [x] d. Generell wird das sx-Prop anstelle von CSS verwendet.
