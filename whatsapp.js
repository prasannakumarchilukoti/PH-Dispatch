/*export const cleanPhone = phone => String(phone || '').replace(/\D/g, '').replace(/^0/, '91');
export function openWhatsApp(phone, message) {
  if (!phone) throw new Error('A WhatsApp number is required.');
  window.open(`https://wa.me/${cleanPhone(phone)}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
}
export const bookingMessage = () => 'Thank You for placing your order.\n\nYour parcel has been packed successfully.\n\nTracking details will be shared shortly.\n\nThank You.';
export const trackingMessage = (number, link) => `Dear Customer,\n\nYour parcel has been shipped.\n\nTracking Number\n${number}\n\nTrack Here\n${link}\n\nThank You.`;
*/
// whatsapp.js

/**
 * Formats Indian phone numbers for WhatsApp.
 *
 * Examples:
 * 9876543210        -> 919876543210
 * +919876543210     -> 919876543210
 * 919876543210      -> 919876543210
 * 09876543210       -> 919876543210
 * 98765 43210       -> 919876543210
 * 98765-43210       -> 919876543210
 */

export function cleanPhone(phone) {

    phone = String(phone || "").trim();

    // Remove spaces, +, -, (, )
    phone = phone.replace(/\D/g, "");

    // Already in correct format
    if (phone.startsWith("91") && phone.length === 12) {
        return phone;
    }

    // Starts with 0
    if (phone.startsWith("0") && phone.length === 11) {
        return "91" + phone.substring(1);
    }

    // Only 10 digits
    if (phone.length === 10) {
        return "91" + phone;
    }

    // Return original cleaned number
    return phone;
}

/**
 * Opens WhatsApp chat.
 */
export function openWhatsApp(phone, message) {

    const mobile = cleanPhone(phone);

    if (!mobile) {
        throw new Error("A WhatsApp number is required.");
    }

    const url =
        `https://wa.me/${mobile}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener");
}

/**
 * Default booking message.
 */
export function bookingMessage() {

    return `Thank You for placing your order.

Your parcel has been packed successfully.

Tracking details will be shared shortly.

Thank You.`;

}

/**
 * Tracking message.
 */
export function trackingMessage(trackingNumber, trackingLink) {

    return `Dear Customer,

Your parcel has been shipped.

Tracking Number:
${trackingNumber}

Track Here:
${trackingLink}

Thank You.`;

}