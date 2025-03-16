/**
 * This is the individual file for a webflow page.
 * For Home page js
 * Add or delete these files as per needed.
 */
import { sectionGallery } from "./section-hero";
console.log("Hello from Home folder");

/* Run the hero animation after DOM Loaded Content */
document.addEventListener("DOMContentLoaded", () => {
  sectionGallery();
});
