# NPM Security Alert: The Axios Supply Chain Attack

**Date:** March 31, 2026  
**Category:** Cybersecurity / Node.js

---

## 🛑 The Incident
On March 30–31, 2026, the popular NPM package **Axios** was the target of a sophisticated supply-chain attack. A lead maintainer's account was hijacked, allowing attackers to publish malicious versions (`1.14.1` and `0.30.4`) directly to the NPM registry.

This wasn't just a bug; it was a **direct compromise** of the distribution channel.

### 🛠️ The Technical Breakdown
The malicious versions included a hidden dependency: `plain-crypto-js@4.2.1`. 

1. **The Postinstall Hook:** When a developer runs `npm install`, a `postinstall` script automatically executes. 
2. **The RAT (Remote Access Trojan):** This script deployed a cross-platform Trojan targeting Windows, macOS, and **Linux**.
3. **The Payload:** The malware was designed to exfiltrate:
   - Environment variables (`.env` files)
   - SSH keys (`~/.ssh/`)
   - AWS/GCP/Cloud credentials
   - Browser session cookies (enabling MFA bypass)

---

## 🛡️ Why You Should Care
If your system is compromised by a RAT, the attacker essentially "owns" your machine. They can:
- **Execute Commands:** Run any terminal command with your user permissions.
- **Lateral Movement:** If you connect to a corporate VPN (e.g., Verizon/Cognizant), the attacker can use your machine as a bridge to attack the internal network.
- **Persistent Access:** Even after a reboot, the Trojan often hides in system services (`systemd`) to remain active.

---

## 🚀 Remediation Steps
If you ran `npm install` during the 3-hour window on March 31:

1. **Revert Immediately:** Use `axios@1.14.0` (the last known clean version).
2. **Check Lockfiles:** Search your `package-lock.json` or `yarn.lock` for `plain-crypto-js`. If it's there, **assume compromise**.
3. **Rotate Secrets:** Reissue all API keys, SSH keys, and cloud credentials that were on that machine.
4. **Wipe & Reinstall:** For a RAT, "cleaning" files is not enough. Re-imaging the OS is the only 100% safe path.

### **Pro-Tip:**
Always use `npm install --ignore-scripts` when testing new or untrusted packages to prevent `postinstall` hooks from running.

---
*Stay safe, stay updated.*  
**- koushik**
