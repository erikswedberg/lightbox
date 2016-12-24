export default class Utility {

  unique(name) {
    window.uid = window.uid || 0;
    window.uid += 1;
    return (name + String(window.uid));
  }

  SaferHTML(templateData) {
    let s = templateData[0];
    for (let i = 1; i < arguments.length; i += 1) {
      const arg = String(arguments[i]);

      // Escape special characters in the substitution.
      s += arg.replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;');

      // Don't escape special characters in the template.
      s += templateData[i];
    }
    return s;
  }
}

