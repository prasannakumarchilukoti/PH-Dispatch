export const cleanPhone = phone => String(phone || '').replace(/\D/g, '').replace(/^0/, '91');
export function openWhatsApp(phone, message) {
  if (!phone) throw new Error('A WhatsApp number is required.');
  window.open(`https://wa.me/${cleanPhone(phone)}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
}
export const bookingMessage = type => type === 'reseller' ? 'THANK YOU FOR PLACING ORDER\nYOUR ORDER IS PACKED AND SHIPPED.\nTRACKING DETAILS WILL BE SHARED SHORTLY' : 'THANK YOU FOR PLACING ORDER FROM PAVAN HANDLOOMS\nYOUR PATTU SAREE HAS BEEN PACKED AND SHIPMENT DONE.\nWILL SEND YOU TRACKING DETAILS SHORTLY';
export const trackingMessage = (number, link) => `Dear Customer,\n\nYour parcel has been shipped.\n\nTracking Number\n${number}\n\nTrack Here\n${link}\n\nThank You.`;
