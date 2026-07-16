export function printLabel(booking) {
  const win = window.open('', '_blank', 'width=600,height=800');
  if (!win) throw new Error('Please allow pop-ups to print labels.');
  const esc = value => String(value || '').replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
  win.document.write(`<!doctype html><title>${esc(booking.orderNo)}</title><style>@page{size:100mm 150mm;margin:5mm}body{font:12pt Arial;margin:0}.line{border-top:1px solid #000;margin:7mm 0}h1{font-size:19pt;margin:0 0 4mm}h2{font-size:10pt;margin:0 0 2mm}p{white-space:pre-line;margin:0;line-height:1.35}.meta{display:flex;justify-content:space-between;font-size:9pt}</style><h1>PAVAN HANDLOOMS</h1><div class="meta"><span>Date: ${esc(booking.date)}</span><b>${esc(booking.orderNo)}</b></div><div class="line"></div><h2>TO</h2><p><b>${esc(booking.customerName)}</b>\n${esc(booking.mobile)}\n${esc(booking.toAddress)}</p><div class="line"></div><h2>FROM</h2><p>${esc(booking.fromAddress)}</p><div class="line"></div><p><b>Courier:</b> ${esc(booking.courier)}\nThank you for placing Order</p><script>addEventListener('load',()=>print())<\/script>`);
  win.document.close();
}
