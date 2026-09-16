export const supportEmail = "numbypad@angedell.it";

export const pitch =
  "Capture phone numbers the moment you meet someone — on your Apple Watch or iPhone — enrich them with context, then save to Contacts in one tap.";

// The exact 13 accent colors offered in Settings → numbyPad (Apple's system
// color palette). "fg" is a pre-computed WCAG-contrasting label color so each
// swatch stays legible whether it lands on a solid accent fill.
export const accentThemes = [
  { key: "default", name: "Default", hex: "#007aff", fg: "#ffffff" },
  { key: "red", name: "Red", hex: "#ff3b30", fg: "#ffffff" },
  { key: "orange", name: "Orange", hex: "#ff9500", fg: "#0b0b0f" },
  { key: "yellow", name: "Yellow", hex: "#ffcc00", fg: "#0b0b0f" },
  { key: "green", name: "Green", hex: "#34c759", fg: "#0b0b0f" },
  { key: "mint", name: "Mint", hex: "#00c7be", fg: "#0b0b0f" },
  { key: "teal", name: "Teal", hex: "#30b0c7", fg: "#0b0b0f" },
  { key: "cyan", name: "Cyan", hex: "#32ade6", fg: "#0b0b0f" },
  { key: "blue", name: "Blue", hex: "#007aff", fg: "#ffffff" },
  { key: "indigo", name: "Indigo", hex: "#5856d6", fg: "#ffffff" },
  { key: "purple", name: "Purple", hex: "#af52de", fg: "#ffffff" },
  { key: "pink", name: "Pink", hex: "#ff2d55", fg: "#ffffff" },
  { key: "brown", name: "Brown", hex: "#a2845e", fg: "#ffffff" },
];

export const defaultAccentKey = "default";
export const accentStorageKey = "numbypad-accent";

export const entryPoints = [
  {
    key: "watch",
    icon: "⌚",
    tone: "watch",
    title: "Capture on Apple Watch",
    desc: "The fastest way. Works with or without your phone nearby. Numbers queue up and sync automatically.",
    steps: [
      "Tap the circular complication on your watch face — opens the keypad instantly",
      "Type the digits. The country prefix chip appears automatically based on where you are",
      "Optionally assign a contact list or record a voice note as a reminder",
      "Press the green check — saved instantly, synced to iPhone in the background",
    ],
  },
  {
    key: "phone",
    icon: "📱",
    tone: "phone",
    title: "Add on iPhone",
    desc: "For numbers you want to type on the bigger screen, or when you don't have your Watch.",
    steps: [
      "Tap + in the top-right of the Numbers tab",
      "Type the number — the field auto-formats and detects the country from your GPS location",
      "Add an optional name to pre-fill it on the next screen",
      "Tap Save — staged immediately, also syncs to your Watch timeline",
    ],
  },
  {
    key: "share",
    icon: "↗",
    tone: "share",
    title: "Share a Profile or Link",
    desc: "Share an Instagram, X (Twitter), or Telegram profile directly into numbyPad from any app.",
    steps: [
      "Find the person's profile in Instagram, X, Telegram, Safari, or Maps",
      "Tap Share → numbyPad from the system share sheet",
      "Pick which staged number the profile belongs to (or create a new one)",
      "For location pins: choose the time and rename the place before attaching",
    ],
  },
];

export const capturedContext = [
  { icon: "📞", name: "Phone number", note: "Auto-formatted to international E.164 standard" },
  { icon: "🌍", name: "Country prefix", note: "Auto-resolved from GPS or manually picked" },
  { icon: "📍", name: "Location", note: "GPS coordinates + nearby place name" },
  { icon: "🕐", name: "Date & time", note: "Exact moment the number was captured" },
  { icon: "📝", name: "Note", note: "Free-text reminder, editable later" },
  { icon: "🎙", name: "Voice note", note: "Recorded on Watch, transcribed on iPhone" },
  { icon: "📋", name: "Contact lists", note: "Pre-assign to groups in Contacts" },
  { icon: "🔗", name: "Social profiles", note: "Instagram, X, Telegram (via share sheet)" },
  { icon: "🌐", name: "Links", note: "URLs with tracking parameters stripped" },
  { icon: "🏷", name: "Name", note: "Optional at capture, required to save" },
  { icon: "📸", name: "Contact photo", note: "Matched from Contacts if it exists" },
  { icon: "🗺", name: "Map pin", note: "Shows on the map tab after saving" },
];

export const stagingActions = [
  {
    key: "name",
    icon: "🏷",
    title: "Give it a name",
    desc: "Tap any number to open its detail view and type a name — required to save to Contacts",
  },
  {
    key: "prefix",
    icon: "🌍",
    title: "Set the prefix",
    desc: "If the number arrived without a country code (no signal at capture time), set it here",
  },
  {
    key: "place",
    icon: "📍",
    title: "Pick a place",
    desc: "Replace raw GPS coordinates with a meaningful place name (restaurant, venue, street)",
  },
  {
    key: "list",
    icon: "📋",
    title: "Assign to list",
    desc: "Add the contact to one or more Contacts groups before saving",
  },
];

export const outcomes = [
  {
    key: "save",
    icon: "✅",
    tone: "save",
    title: "Save to Contacts",
    desc: "The main outcome. The number becomes a full contact in your iPhone's Contacts app.",
    steps: [
      "Open the staged number",
      "Type a name (required)",
      "Tap Save to Contacts",
      "All context (note, place, date, profiles, voice note) is saved with it",
      "The number disappears from numbyPad's staging area",
      "Your Watch's copy is removed automatically",
    ],
  },
  {
    key: "enrich",
    icon: "✨",
    tone: "enrich",
    title: "Enrich Existing Contact",
    desc: "The number already belongs to someone in your Contacts. Add the capture context to them instead of creating a duplicate.",
    steps: [
      "numbyPad detects the number is already in Contacts",
      "Shows the matched contact with their photo",
      'Tap "Same Person — Enrich Contact"',
      "Adds the note, location, profiles, voice note to the existing contact",
      "Also upgrades national format numbers to full international format",
    ],
  },
  {
    key: "voice",
    icon: "🎙",
    tone: "voice",
    title: "Process Voice Note",
    desc: "A voice note you recorded on your Watch arrives on iPhone for transcription or AI summary.",
    steps: [
      "Voice note transfers automatically from Watch",
      "Appears in the staged number's detail view",
      "Tap Transcribe → converts speech to text, prepended to the note field",
      "Tap Summarize with Apple Intelligence → AI writes a concise summary",
      "Saved to iCloud alongside the contact",
    ],
  },
  {
    key: "trash",
    icon: "🗑",
    tone: "trash",
    title: "Move to Trash",
    desc: "Don't need it — but don't lose it either. Numbers sit in Trash for 30 days before auto-deletion.",
    steps: [
      "Swipe left on any staged number, or tap Move to Trash",
      "Also works from the Watch — delete there, it disappears here too",
      "Open the Trash tab to restore or permanently delete",
      "Restore → number returns to the staging area on both devices",
      "Auto-purge after 30 days, or empty all at once from Settings",
    ],
  },
];

export const features = [
  {
    key: "map",
    icon: "🗺",
    color: "teal",
    title: "Map View",
    body: "Every captured number with a GPS fix appears as a pin on a map. See at a glance where and when you met people — conference, event, bar, street. Tap a pin to open the staged number directly from the map.",
  },
  {
    key: "travel",
    icon: "✈️",
    color: "amber",
    title: "Fix for Travel",
    body: "Contacts saved with local-format numbers (e.g. 347 1234567 instead of +39 347 1234567) stop working abroad. numbyPad scans your Contacts and shows a list with before → after previews. Choose your country, select who to fix, tap Apply — done in seconds.",
  },
  {
    key: "sync",
    icon: "🔄",
    color: "phone",
    title: "Watch–iPhone Sync",
    body: "Everything syncs both ways in real time. Numbers captured on the Watch appear immediately on the iPhone's Numbers tab. Edits made on the iPhone (name, note, place) mirror back to the Watch timeline. Works live when both are active, or queued in the background.",
  },
  {
    key: "share",
    icon: "📱",
    color: "share",
    title: "Share from Any App",
    body: "Share an Instagram, X, or Telegram profile with numbyPad from any app. If you have one staged number: the profile attaches automatically. Multiple staged numbers: a picker asks which. Zero staged numbers: it waits and attaches to your next capture. Tracker parameters are stripped from URLs by default.",
  },
  {
    key: "prefix",
    icon: "🌍",
    color: "sky",
    title: "Smart Country Prefix",
    body: "The Watch resolves your country prefix offline-first — no network needed. It starts with an offline country table, refines it as the GPS fix arrives, and falls back to your iPhone's last known region. You can also pick the prefix manually by tapping the chip on the keypad.",
  },
  {
    key: "theme",
    icon: "🎨",
    color: "red",
    title: "Accent Color & Icon",
    body: "Choose an accent color in Settings → numbyPad. The entire app (Watch, iPhone, share sheet) updates in sync — and your home screen icon switches to match automatically, with no confirmation dialog. Available in 12 colors including Blue, Red, Green, Purple, Pink, and more.",
  },
];

export const goodToKnow = [
  {
    key: "privacy",
    icon: "🔒",
    color: "green",
    title: "Privacy-first design",
    body: "No account. No cloud. No analytics. Your numbers live on your Apple Watch, your iPhone, and optionally iCloud (for voice notes only). Nothing is sent to any server.",
  },
  {
    key: "offline",
    icon: "⚡",
    color: "amber",
    title: "Offline-ready",
    body: "You can capture a number on your Watch with no WiFi, no cellular, and no iPhone nearby. The capture queues and syncs the moment a connection is available. The prefix chip resolves offline from a built-in country table.",
  },
  {
    key: "dupe",
    icon: "🔁",
    color: "sky",
    title: "Duplicate protection",
    body: "numbyPad checks whether the number already exists in your Contacts before you save. If it does, it offers to enrich the existing record instead — so you never end up with two entries for the same person.",
  },
];

export const useCasePills = [
  { icon: "⌚", label: "Capture on Apple Watch" },
  { icon: "📱", label: "Add number on iPhone" },
  { icon: "↗", label: "Share a social profile" },
  { icon: "🗺", label: "See captures on a map" },
  { icon: "🎙", label: "Record a voice note" },
  { icon: "✅", label: "Save to Contacts" },
  { icon: "✨", label: "Enrich existing contact" },
  { icon: "✈️", label: "Fix numbers for travel" },
  { icon: "🗑", label: "Trash & restore" },
  { icon: "🎨", label: "Customize accent & icon" },
];

export const faqs = [
  {
    q: "Do I need an iPhone to use numbyPad, or does it work standalone on Apple Watch?",
    a: "numbyPad is designed as an iPhone + Apple Watch pair. You can capture a number on your Watch with no iPhone nearby — it queues locally and syncs automatically the next time your devices are in range — but saving to Contacts and the richer editing tools (place picker, voice note transcription, map view) happen in the iPhone app.",
  },
  {
    q: "Where is my data stored? Does numbyPad use the cloud?",
    a: "Your numbers, notes, and locations stay on your Apple Watch and iPhone. There's no account and no numbyPad server. The one exception is voice notes, which are saved to your personal iCloud alongside the contact so they're backed up — this uses your own iCloud storage, not a numbyPad service.",
  },
  {
    q: "What happens to a number after I capture it — does it go straight into Contacts?",
    a: "No. Every capture lands first in the Numbers tab as a staged entry. Nothing is written to your Contacts app until you explicitly choose an outcome: Save to Contacts, Enrich an existing contact, or move it to Trash.",
  },
  {
    q: "I captured a number that already belongs to someone I know. Will it create a duplicate?",
    a: "numbyPad checks your Contacts before saving. If it finds a match, it shows you that contact's photo and offers \"Same Person — Enrich Contact\" instead of creating a new entry, adding your new note, location, and any attached profile to the existing contact.",
  },
  {
    q: "I deleted a number by mistake — can I get it back?",
    a: "Yes. Deleted numbers go to the Trash tab and stay there for 30 days before being permanently removed. Open Trash and tap Restore to return a number to your staging area on both iPhone and Watch.",
  },
  {
    q: "What is \"Fix for Travel\"?",
    a: "It's a tool that scans your existing Contacts for phone numbers saved in local format (e.g. 347 1234567 instead of +39 347 1234567) — numbers that stop working once you're calling or texting from abroad. Pick your country, review the before → after previews, choose who to update, and apply the fix in one tap.",
  },
  {
    q: "Can I share an Instagram, X, or Telegram profile straight into numbyPad?",
    a: "Yes, from any app's share sheet. If you have exactly one staged number, the profile attaches to it automatically. If you have several, numbyPad asks which one. If you have none yet, it holds onto the profile and attaches it to your very next capture.",
  },
  {
    q: "Does numbyPad work without an internet connection?",
    a: "Capturing a number works fully offline — the country prefix is resolved from a built-in offline table and refined by GPS as it becomes available. Syncing between Watch and iPhone, voice transcription, and AI summaries need connectivity or an active WCSession, and will complete automatically once available.",
  },
  {
    q: "How do voice notes get summarized?",
    a: "A voice note recorded on your Watch transfers to iPhone, where you can tap Transcribe to convert it to text, or Summarize with Apple Intelligence to get a concise summary — processed on-device, with no data leaving your iPhone.",
  },
  {
    q: "I'm not seeing my numbers update between my Watch and iPhone. What should I check?",
    a: "Make sure both devices are paired and your Watch app is installed and up to date. Sync happens live when both devices are active nearby, or queues in the background otherwise — a fresh unlock of both devices usually triggers a sync. If it's still stuck, email us and we'll help troubleshoot.",
  },
];

export const privacySections = [
  {
    title: "No account, no server",
    body: "numbyPad does not require you to create an account, and there is no numbyPad server that your data passes through. The app works entirely on your Apple Watch and iPhone.",
  },
  {
    title: "What numbyPad stores, and where",
    body: "Phone numbers, names, notes, timestamps, locations, and attached social links or map pins are stored locally in the app's data store on your iPhone and Apple Watch, and sync between your own devices via Apple's WatchConnectivity framework. Voice notes are saved to your personal iCloud account so they're backed up with the rest of your contact data — this uses your own iCloud storage under your Apple ID, not a numbyPad-operated service.",
  },
  {
    title: "Permissions numbyPad may ask for, and why",
    body: "Contacts — to save captured numbers, detect duplicates, and enrich existing entries. Location — to resolve the country prefix automatically and to attach a place to a capture; you can decline and set the prefix and place manually instead. Microphone — only if you choose to record a voice note. Photo library / camera — only if you choose to share a photo alongside a contact.",
  },
  {
    title: "No analytics, no tracking, no advertising",
    body: "numbyPad does not include third-party analytics, advertising, or tracking SDKs, and does not sell or share your data with anyone. Shared links (Instagram, X, Telegram, or other URLs) have tracking parameters stripped before being stored.",
  },
  {
    title: "Apple Intelligence features",
    body: "Voice note summarization uses Apple Intelligence and, where supported, runs on-device — your voice notes and their summaries are not sent to numbyPad or to any third-party service we control.",
  },
  {
    title: "Deleting your data",
    body: "Moving a number to Trash keeps it recoverable for 30 days, after which it's automatically and permanently deleted; you can also empty Trash immediately from Settings. Deleting the numbyPad app removes its local data from your devices; voice notes stored in your iCloud follow your standard iCloud data controls.",
  },
  {
    title: "Contact us",
    body: `Questions about this policy or how numbyPad handles your data? Email ${supportEmail}.`,
  },
];
