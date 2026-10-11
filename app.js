const copyButtons = document.querySelectorAll("[data-copy-email]");

for (const button of copyButtons) {
  button.addEventListener("click", async () => {
    const status = button.parentElement.querySelector(".copy-status");
    button.textContent = "Copying…";
    if (status) status.textContent = "Copying email address.";
    try {
      await navigator.clipboard.writeText(button.dataset.copyEmail);
      button.textContent = "Copied";
      if (status) status.textContent = "Email copied to clipboard.";
    } catch {
      if (status) status.textContent = "Copy failed. Select the email address instead.";
    }

    window.setTimeout(() => {
      button.textContent = "Copy email";
      if (status) status.textContent = "";
    }, 2400);
  });
}
