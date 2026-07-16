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

// whatsapp.js

export function cleanPhone(phone) {

    phone = String(phone || "").trim();
    phone = phone.replace(/\D/g, "");

    if (phone.startsWith("91") && phone.length === 12)
        return phone;

    if (phone.startsWith("0") && phone.length === 11)
        return "91" + phone.substring(1);

    if (phone.length === 10)
        return "91" + phone;

    return phone;
}

export function openWhatsApp(phone, message) {

    const mobile = cleanPhone(phone);

    if (!mobile)
        throw new Error("WhatsApp number is required.");

    window.open(
        `https://wa.me/${mobile}?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener"
    );
}

// CUSTOMER / RESELLER MESSAGE

export function bookingMessage(type = "customer") {

    if (type === "reseller") {

        return `THANK YOU FOR PLACING YOUR ORDER.

YOUR ORDER HAS BEEN PACKED AND SHIPPED.

TRACKING DETAILS WILL BE SHARED SHORTLY.`;

    }

    return `THANK YOU FOR PLACING YOUR ORDER WITH PAVAN HANDLOOMS.

YOUR PATTU SAREE HAS BEEN PACKED AND SHIPPED.

TRACKING DETAILS WILL BE SHARED SHORTLY.`;

}

// PRINT MESSAGE

export function printMessage() {

    return `Thank You for placing your order.

Tracking details will be shared shortly.`;

}

export function trackingMessage(number, link) {

    return `Dear Customer,

Your parcel has been shipped.

Tracking Number:
${number}

Track Here:
${link}

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