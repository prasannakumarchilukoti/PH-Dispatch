export const cleanPhone = phone => String(phone || '').replace(/\D/g, '').replace(/^0/, '91');
export function openWhatsApp(phone, message) {
  if (!phone) throw new Error('A WhatsApp number is required.');
  window.open(`https://wa.me/${cleanPhone(phone)}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
}
export const bookingMessage = () => 'Thank You for placing your order.\n\nYour parcel has been packed successfully.\n\nTracking details will be shared shortly.\n\nThank You.';
export const trackingMessage = (number, link) => `Dear Customer,\n\nYour parcel has been shipped.\n\nTracking Number\n${number}\n\nTrack Here\n${link}\n\nThank You.`;
