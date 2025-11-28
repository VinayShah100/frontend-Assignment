# GTVL Management Portal – QA & Bug Testing Project

This repository contains all manual testing and bug reporting work done for the **GTVL Management Portal**, an internal ERP-style web application designed for managing SKUs, Stores, Supervisors, and Promodizers.

The purpose of this project is to:
- Analyze each module of the portal  
- Identify UI, functional, validation, and data integrity issues  
- Create professional bug reports  
- Generate test cases for all identified defects  
- Document the behaviour of each page in a structured QA-friendly format  

---

## 🖥️ **About the GTVL Management Portal**

The GTVL Management Portal acts as a **centralized dashboard** for operations management.

### ### 🔹 Main Modules Tested:
- **Dashboard**
- **SKU Management**
- **Store Management**
- **Supervisor Management**
- **Promodizer Management**

---
## 🐞 Bug Count Summary by Module

## 🐞 Bug Count Summary by Module (Updated)

| **Module**                | **Bug Count** |
|---------------------------|---------------|
| **SKU Module**            | 5 Bugs        |
| **Store Module**          | 8 Bugs        | 
| **Supervisor Module**     | 4 Bugs        |
| **Promodizer Module**     | 9 Bugs        | 
| **Sales & Reporting Module** | 3 Bugs    |
| **Authentication / Global**  | 2 Bugs    |



## 🐞 Complete Bug Summary Table

| **Bug ID**    | **Issue Summary**                                          | **Severity** | **Status** |
|---------------|-------------------------------------------------------------|--------------|------------|
| SKU-001       | Form accepts emojis, symbols, invalid text                  | High         | Open       |
| SKU-002       | Edit/View/Delete buttons not responding on mouse click      | Critical     | Open       |
| SKU-003       | Duplicate SKU Codes allowed                                 | Critical     | Open       |
| SKU-004       | Edit modal opens after multiple clicks; Delete requires refresh | Medium   | Open       |
| SKU-005       | Action buttons freeze intermittently                         | High         | Open       |
| STORE-001     | Store form accepts emojis & invalid characters               | High         | Open       |
| STORE-002     | Store action buttons not working on desktop                  | Critical     | Open       |
| STORE-003     | Duplicate store Name/Email/Phone allowed                     | High         | Open       |
| STORE-004     | Contact number accepts only USA format                       | Medium       | Open       |
| STORE-005     | Store Export icon not working                                | High         | Open       |
| STORE-006     | Store phone/email validation missing                         | High         | Open       |
| STORE-007     | Store fields accept long special-character strings           | Medium       | Open       |
| STORE-008     | Duplicate city/state values allowed                          | Low          | Open       |
| STORE-009    | Assigned Promodizers UI breaks for long names                 | Medium       | Open       |
| SUP-001       | Supervisor fields allow emojis & invalid characters          | High         | Open       |
| SUP-002       | Duplicate Supervisor email/phone/name allowed                | Critical     | Open       |
| SUP-003       | Supervisor fields accept excessively long strings            | Medium       | Open       |
| SUP-004       | Invalid email/phone formats accepted for Supervisors         | High         | Open       |
| PRO-001       | Promodizer form accepts emojis & invalid inputs              | High         | Open       |
| PRO-002       | Duplicate Promodizer email/phone/name allowed                | Critical     | Open       |
| PRO-003       | Promodizer link icon not working                             | Medium       | Open       |
| PRO-004       | Promodizer location icon not working                         | Medium       | Open       |
| PRO-005       | Promodizer contact field freezes after scrolling             | Medium       | Open       |
| PRO-006       | Promodizer Employee ID allows invalid formats                | Medium       | Open       |
| PRO-007       | Promodizer name accepts numeric/symbol values                | Medium       | Open       |
| PRO-008      | Promodizer long name overflows UI layout                      | Medium       | Open       |
| SALES-001     | Manual barcode typing limited to 7 digits                    | Medium       | Open       |
| SALES-002     | Sales Report not generating (No data to export)              | High         | Open       |
| SALES-003     | Sales Details page shows empty list even with data           | High         | Open       |
| AUTH-001      | Logout not clearing session across roles                     | High         | Open       |
| GLOBAL-001    | Missing unified validation across all modules                | High         | Open       |


# 🐞 GTVL Management Portal — Detailed Bug Reports

Below are all validated and documented bugs found during manual testing of the GTVL Management Portal.  
Each bug includes ID, severity, steps, expected vs actual results, and evidence.

---

## ✅ Bug 1 — System Accepts Emojis & Special Characters in Text Fields
**Bug ID:** SKU-001  
**Title:** Input fields allow emojis & invalid characters  
**Module:** SKU Create (sku_create.html)  
**Severity:** High  
**Priority:** Medium  
**Type:** Validation Defect  
**Environment:** Windows 10, Chrome 142, Localhost  

### **Precondition**
User logged in, SKU Create page open.

### **Description**
The SKU creation form allows emoji, special characters, symbols, and random text in fields where structured input is required.

**Affected fields:**
- SKU Code  
- Barcode  
- Product Name  
- Category  
- Description  

### **Steps to Reproduce**
1. Navigate to **SKUs → Add New SKU**.  
2. Enter emojis like 🤣😂🐱‍💻 or characters like `<script>`, `!!!!`, `@@@@`, `..........`.  
3. Click **Save SKU**.  
4. Open **SKU List** page.

### **Expected Result**
- System should block emojis, script tags, special characters, invalid barcode formats.  
- Validation errors should appear.

### **Actual Result**
- Form accepts all invalid characters.  
- Invalid entries appear in SKU list.

### **Evidence**
- Entries showing 😂🤣😅  
- “…………”  
- Non-numeric barcode  
- Corrupted category text

---

## ✅ Bug 2 — SKU Action Buttons Not Working Consistently
**Bug ID:** SKU-002  
**Title:** Edit/View/Delete buttons fail on mouse click  
**Module:** SKU List (sku_list.html)  
**Severity:** Critical  
**Priority:** High  
**Type:** Functional Bug  
**Environment:** Windows 10, Chrome 142  

### **Precondition**
SKU List page open.

### **Description**
Action icons do not respond when clicked using a **mouse**.  
They work only using:
- Touchpad  
- Mobile mode  

### **Steps to Reproduce**
1. Go to **SKUs → SKU List**.  
2. Click View, Edit, or Delete using mouse.  
3. Try on multiple rows.

### **Expected Result**
Buttons should work instantly on mouse click.

### **Actual Result**
- No response on mouse click.  
- Works on touchpad or mobile view.

### **Evidence**
User cannot edit or delete SKUs on desktop.

---

## ✅ Bug 3 — Duplicate SKU Codes Allowed
**Bug ID:** SKU-003  
**Title:** Duplicate SKU Codes being created  
**Module:** SKU Create & List  
**Severity:** Critical  
**Priority:** High  

### **Description**
System allows two SKUs with the **same SKU Code**, causing conflicts in editing, deleting, and reporting.

### **Steps to Reproduce**
1. Create SKU with code **“SKU001”**.  
2. Create another SKU with the same code.  
3. Save both.

### **Expected Result**
Error message: **“SKU Code already exists.”**

### **Actual Result**
System saves duplicate SKU codes.

### **Evidence**
Two identical SKU codes visible in SKU List.

---

## ✅ Bug 4 — Edit Modal & Delete Icon Require Multiple Attempts
**Bug ID:** SKU-004  
**Title:** Edit modal delayed; Delete requires refresh  
**Module:** SKUs Management  
**Severity:** Medium  
**Priority:** High  
**Type:** UI/Functional Bug  

### **Description**
- Edit modal opens after **3–5 clicks**.  
- Delete action does not work until page refresh.

### **Steps to Reproduce**
1. Open SKUs page.  
2. Click **Edit** multiple times → delayed modal.  
3. Click **Delete** → no action.  
4. Refresh page → delete works.

### **Expected Result**
- Edit modal should open immediately.  
- Delete should work instantly.

### **Actual Result**
- Edit modal delayed.  
- Delete stuck until refresh.

---

## ✅ Bug 5 — Store Contact Number Accepts Only USA Format
**Bug ID:** STORE-004  
**Title:** Contact number rejects non-US formats  
**Module:** Store Create  
**Severity:** Medium  
**Priority:** High  
**Type:** Validation Bug  

### **Description**
Phone field rejects non-US numbers (e.g., Indian numbers like **9876543210**).

### **Steps to Reproduce**
1. Open **Create Store**.  
2. Enter any non-US number.  
3. Save.

### **Expected Result**
Should accept valid international formats.

### **Actual Result**
Valid local numbers are rejected.

### **Impact**
Cannot create stores outside US region.

---

## ✅ Bug 6 — Store Form Accepts Emojis & Special Characters
**Bug ID:** STORE-001  
**Title:** Store form accepts emojis & invalid characters  
**Module:** Store Create  
**Severity:** High  
**Priority:** Medium  
**Type:** Validation Defect  

### **Description**
Store fields allow emojis, symbols, invalid characters.

**Affected fields include:**
- Store Code  
- Store Name  
- City/State  
- Contact Person  
- Email  
- Phone  

### **Steps to Reproduce**
1. Go to **Stores → Create New Store**.  
2. Enter `🤣😂🐱‍💻!!!!@@@.....`  
3. Save Store.

### **Expected Result**
Form should block invalid input.

### **Actual Result**
Invalid values saved successfully.

---

---

## ✅ Bug 8 — Duplicate Store Records Allowed
**Bug ID:** STORE-003  
**Title:** Duplicate store Name/Email/Phone allowed  
**Module:** Store Create  
**Severity:** High  
**Priority:** High  
**Type:** Data Integrity Defect  
**Environment:** Windows 10, Chrome 142  

### **Description**
The system does not validate or restrict duplicate store values.  
Users can create multiple stores using the **same Name, Email, and Phone Number**.

### **Steps to Reproduce**
1. Create a store with valid data.  
2. Create another store using the same Email/Phone/Name.  
3. Save both records.

### **Expected Result**
System should show a duplicate validation error.

### **Actual Result**
System accepts all duplicates and displays them in the Store List.

### **Evidence**
Multiple duplicate entries visible in Store List.

---

## ✅ Bug 9 — Promodizer Fields Accept Emojis & Special Characters
**Bug ID:** PRO-001  
**Title:** Promodizer creation allows emojis & invalid inputs  
**Module:** Promodizer Create  
**Severity:** High  
**Priority:** Medium  
**Type:** Validation Defect  
**Environment:** Windows 10, Chrome 142  

### **Precondition**
Promodizer Create page open.

### **Description**
Promodizer form allows invalid data in:  
- First Name  
- Last Name  
- Employee ID  
- Email  
- Phone Number  

### **Steps to Reproduce**
1. Go to **Promodizer → Add New**.  
2. Enter invalid values like `😂🤣🐱‍💻!!!!!%%%%%`.  
3. Click **Save**.

### **Expected Result**
Strict validation should prevent saving such values.

### **Actual Result**
Invalid entries are accepted and shown in the list.

### **Evidence**
Names like “😂😂😂 Martinez” appear in Promodizer List.

---

## ✅ Bug 10 — Duplicate Promodizer Records Allowed
**Bug ID:** PRO-002  
**Title:** Duplicate Email/Phone/Name allowed for Promodizers  
**Module:** Promodizer Create  
**Severity:** Critical  
**Priority:** High  
**Type:** Data Integrity Bug  
**Environment:** Windows 10, Chrome 142  

### **Description**
System allows multiple Promodizer accounts with the same:
- Email  
- Phone Number  
- Name  

Only Employee ID appears to have strict uniqueness.

### **Steps to Reproduce**
1. Create a Promodizer with a valid Email/Phone.  
2. Create another Promodizer with the same details.  
3. Save both records.

### **Expected Result**
Duplicate entries should be blocked.

### **Actual Result**
System saves them without validation.

### **Evidence**
Repeated entries visible in Promodizer List.

---

## ✅ Bug 11 — Supervisor Form Accepts Emojis & Special Characters
**Bug ID:** SUP-001  
**Title:** Supervisor fields allow emojis & invalid characters  
**Module:** Supervisor Create  
**Severity:** High  
**Priority:** Medium  
**Type:** Validation Defect  
**Environment:** Windows 10, Chrome 142  

### **Description**
Supervisor form accepts invalid values in:
- First Name  
- Last Name  
- Employee ID  
- Email  
- Phone  

### **Steps to Reproduce**
1. Open **Supervisor → Add New Supervisor**.  
2. Enter:  
   - Name: `🤣 John 😂`  
   - Employee ID: `SUP-@@@-123`  
   - Email: `abc@`, `%@@@gmail.com`  
   - Phone: `abcd++++🤣`  
3. Save the form.

### **Expected Result**
Names numeric formats must be blocked; phone/email must be validated.

### **Actual Result**
Invalid values are saved.

### **Evidence**
Supervisor List contains entries with emojis & symbols.

---

## ✅ Bug 12 — Duplicate Supervisor Records Allowed
**Bug ID:** SUP-002  
**Title:** Duplicate supervisor email/phone/name allowed  
**Module:** Supervisor Create & List  
**Severity:** Critical  
**Priority:** High  
**Type:** Data Integrity Defect  
**Environment:** Windows 10, Chrome 142  

### **Description**
System allows creation of more than one supervisor with the same:
- Email  
- Phone  
- Name  

### **Steps to Reproduce**
1. Create a supervisor (email/phone).  
2. Create another supervisor with the same values.  
3. Save.

### **Expected Result**
Duplicate entries should be rejected.

### **Actual Result**
Both records get added successfully.

### **Evidence**
Supervisor List shows multiple identical entries.

---

## ✅ Bug 13 — Promodizer Link Icon Not Working
**Bug ID:** PRO-003  
**Title:** Link icon does not trigger any action  
**Module:** Promodizer List  
**Severity:** Medium  
**Priority:** Medium  
**Type:** Functional Bug  
**Environment:** Windows 10, Chrome 142  

### **Description**
Clicking the link icon in Promodizer List does **nothing**—no popup, page redirect, or event trigger.

### **Steps to Reproduce**
1. Open **Promodizer List**.  
2. Click the **Link icon**.  

### **Expected Result**
Link icon should perform its assigned function (mapping/linking).

### **Actual Result**
No action is performed.

### **Evidence**
Console log shows no errors or events.

---

## ✅ Bug 14 — Promodizer Location Icon Not Working
**Bug ID:** PRO-004  
**Title:** Location icon does not open store location  
**Module:** Promodizer List  
**Severity:** Medium  
**Priority:** Medium  
**Type:** Functional Bug  
**Environment:** Windows 10, Chrome 142  

### **Description**
Location icon shows logs in console but **does not open any map/location view**.

### **Steps to Reproduce**
1. Go to **Promodizer List**.  
2. Click the **location icon** beside any entry.

### **Expected Result**
Map or location popup should open.

### **Actual Result**
Only console logs appear.

### **Evidence**
Console prints store data but UI does not display location.

---

## ✅ Bug 15 — Store Export Icon Not Working
**Bug ID:** STORE-005  
**Title:** Export icon not functioning  
**Module:** Store List  
**Severity:** High  
**Priority:** High  
**Type:** Functional Bug  
**Environment:** Windows 10, Chrome 142  

### **Description**
Clicking the Export icon does not:
- Download a file  
- Trigger export  
- Show any response  

### **Steps to Reproduce**
1. Open **Store List**.  
2. Click the **Export icon**.

### **Expected Result**
Export should generate and download a CSV or Excel file.

### **Actual Result**
No response at all.

### **Evidence**
No network calls or file download triggered.

---
---

## ✅ Bug 16 — Barcode Manual Input Limit Issue (Only 7 Digits Allowed)
**Bug ID:** SALES-001  
**Title:** Manual barcode typing stops after 7 digits  
**Module:** Promodizer → Sales Recording  
**Severity:** Medium  
**Priority:** Medium  
**Type:** Functional/Input Handling Bug  
**Environment:** Windows 10, Chrome 142  
**Precondition:** Promodizer logged in, Sales Recording page open  

### **Description**
Manual barcode typing stops at **7 digits** and shows **“Barcode not recognized”**.  
However, **copy–pasting longer barcodes** (12–13 digits) is allowed, meaning the restriction only applies to manual input.

### **Steps to Reproduce**
1. Open **Sales Recording**.  
2. Type a barcode with more than 7 digits.  
3. Try copy–pasting a longer barcode.

### **Expected Result**
Full barcode length (12–14 digits) should be accepted for manual typing.

### **Actual Result**
Manual typing stops at 7 digits; copy–paste bypasses this validation.

### **Evidence**
“Barcode not recognized” only when typing manually.

---

## ✅ Bug 17 — Sales Report Not Generating
**Bug ID:** SALES-002  
**Title:** “No data to export” even when data exists  
**Module:** Sales Report  
**Severity:** High  
**Priority:** High  
**Type:** Functional/Backend Bug  
**Environment:** Windows 10, Chrome 142  

### **Description**
When generating report, system incorrectly shows **“No data to export”** even though valid sales exist.

### **Steps to Reproduce**
1. Record sales in Sales Recording.  
2. Open **Generate Sales Report**.  
3. Select date range → click **Generate**.

### **Expected Result**
A valid report should be generated and downloaded.

### **Actual Result**
“No data to export” message appears incorrectly.

### **Impact**
Critical business reporting becomes impossible.

### **Evidence**
Backend console logs show existing sales data.

---

## ✅ Bug 18 — Sales Details Page Shows No Records
**Bug ID:** SALES-003  
**Title:** Sales Details page not showing stored sales  
**Module:** Sales History → Sales Details  
**Severity:** High  
**Priority:** High  
**Type:** Data Sync/Display Bug  
**Environment:** Windows 10, Chrome 142  

### **Description**
Sales Details page displays **“No record found”** even though:
- Sales were recorded  
- Dashboard shows correct sales count  
- Sales appear in other modules  

### **Steps to Reproduce**
1. Record multiple sales.  
2. Go to **Sales History → Sales Details**.  
3. Select date/work user/store.

### **Expected Result**
All recorded sales should appear.

### **Actual Result**
Empty list: “No record found”.

### **Impact**
Users cannot verify or view sale details.

### **Evidence**
Mismatch between dashboard count & detail list.

---

## ✅ Bug 19 — Logout Not Clearing Session Across Roles
**Bug ID:** AUTH-001  
**Title:** Logout does not clear session/token  
**Module:** Global Authentication  
**Severity:** High  
**Priority:** High  
**Type:** Authentication Bug  
**Environment:** Windows 10, Chrome 142  

### **Description**
Logging out does NOT clear the active session.  
When user logs out and logs in with a different account, the system still opens the **previous user session**.

### **Steps to Reproduce**
1. Login as User A (Admin).  
2. Logout.  
3. Try logging in as User B (Promodizer).  

### **Expected Result**
Session must reset; login should open the correct user account.

### **Actual Result**
System still loads User A’s dashboard.

### **Impact**
- Severe security issue  
- Cross-role access vulnerability  

### **Evidence**
Session persists even after logout.

---

## ✅ Bug 20 — Contact Field Freezes After Scrolling in Promodizer Create Page
**Bug ID:** PRO-005  
**Title:** Contact textbox becomes unresponsive after scrolling  
**Module:** Promodizer Create  
**Severity:** Medium  
**Priority:** High  
**Type:** UI/Interaction Bug  
**Environment:** Windows 10, Chrome 142  

### **Description**
The Contact Number field becomes **unresponsive** after scrolling the page.  
Typing lags or stops unless the page is refreshed.

### **Steps to Reproduce**
1. Go to **Promodizer → Add New**.  
2. Click the Contact Number field.  
3. Scroll the page.  
4. Try typing again.

### **Expected Result**
Field remains responsive at all times.

### **Actual Result**
Field freezes / typing becomes laggy.

### **Impact**
User cannot properly enter phone numbers.

### **Evidence**
Field becomes dead after scroll.

---

## ✅ Bug 21 — SKU Delete/View/Edit Buttons Sometimes Freeze
**Bug ID:** SKU-005  
**Title:** Action buttons intermittently stop responding  
**Module:** SKU List  
**Severity:** High  
**Priority:** High  
**Type:** Intermittent Functional Bug  
**Environment:** Windows 10, Chrome 142  

### **Description**
Edit/Delete/View icons randomly stop responding.  
A page refresh is required before they start working again.

### **Steps to Reproduce**
1. Open **SKU List**.  
2. Scroll and interact with multiple rows.  
3. Try clicking Edit/Delete/View on different records.

### **Expected Result**
Buttons should consistently work.

### **Actual Result**
Some rows become unresponsive.

### **Evidence**
Icons stop reacting at random positions.

---

## ✅ Bug 22 — Store Fields Accept Invalid Phone & Email Formats
**Bug ID:** STORE-006  
**Title:** Store creation allows wrong phone/email formats  
**Module:** Store Create  
**Severity:** High  
**Priority:** Medium  
**Type:** Validation Bug  
**Environment:** Windows 10, Chrome 142  

### **Description**
Invalid phone/email formats are accepted:
- Phones: `abcd++++`, `abc123456`, `🤣🤣🤣`  
- Emails: `abc@`, `test@@gmail.com`, `%%%%@gmail.com`

### **Steps to Reproduce**
1. Open **Create Store**.  
2. Enter invalid phone/email.  
3. Save form.

### **Expected Result**
System should block invalid formats.

### **Actual Result**
Store saved with invalid email/phone values.

### **Evidence**
Bad data appears in Store List.

---


---

## ✅ Bug 23 — Supervisor Fields Accept Long Unrestricted Strings
**Bug ID:** SUP-003  
**Title:** Supervisor fields accept excessively long values  
**Module:** Supervisor Create  
**Severity:** Medium  
**Priority:** Low  
**Type:** UI/Validation Bug  
**Environment:** Windows 10, Chrome 142  

### **Description**
Supervisor form allows extremely long input strings (200+ characters) in:
- First Name  
- Last Name  
- Employee ID  
- Email  
- Address  

This results in broken UI layout and unrealistic data acceptance.

### **Steps to Reproduce**
1. Open **Supervisor → Create**.  
2. Enter a very long string (200+ characters).  
3. Save the form.

### **Expected Result**
System should restrict character length for all fields.

### **Actual Result**
Form accepts all oversized inputs without restriction.

### **Evidence**
List view text breaks alignment due to long values.

---

## ✅ Bug 24 — Promodizer Employee ID Accepts Special Characters
**Bug ID:** PRO-006  
**Title:** Employee ID field allows unsupported formats  
**Module:** Promodizer Create  
**Severity:** Medium  
**Priority:** Medium  
**Type:** Validation Bug  
**Environment:** Windows 10, Chrome 142  

### **Description**
Employee ID accepts invalid formats including:
- `PRO-@@@-111`  
- `#######`  
- Emojis like `🤣🤣🤣`

### **Steps to Reproduce**
1. Go to **Promodizer → Add New**.  
2. Enter invalid Employee ID formats.  
3. Click Save.

### **Expected Result**
Employee ID should follow a structured format (example: **PRO-2025-007**).

### **Actual Result**
Invalid Employee IDs are saved.

### **Evidence**
Corrupted IDs visible in Promodizer List.

---

## ✅ Bug 25 — Supervisor Email & Phone Not Validated Properly
**Bug ID:** SUP-004  
**Title:** Email/Phone fields accept invalid formats  
**Module:** Supervisor Create  
**Severity:** High  
**Priority:** High  
**Type:** Validation Defect  
**Environment:** Windows 10, Chrome 142  

### **Description**
Supervisor Create form accepts invalid:
- Emails → `abcd@`, `test@@gmail.com`, `%%%%@gmail.com`  
- Phone Numbers → `abc123`, `++++++`, `🤣🤣🤣`

### **Steps to Reproduce**
1. Open **Add Supervisor**.  
2. Enter invalid phone/email formats.  
3. Save the form.

### **Expected Result**
System should block invalid phone & email values.

### **Actual Result**
Invalid entries are saved successfully.

### **Evidence**
Supervisor List contains wrong email/phone formats.

---

## ✅ Bug 26 — Promodizer Name Fields Accept Numeric & Symbol Values
**Bug ID:** PRO-007  
**Title:** Name fields accept numbers, symbols, and emojis  
**Module:** Promodizer Create  
**Severity:** Medium  
**Priority:** Medium  
**Type:** Validation Bug  
**Environment:** Windows 10, Chrome 142  

### **Description**
Promodizer name fields allow invalid values:
- Numbers: **12345**  
- Symbols: **@@@!!!**  
- Emojis: **🤣🤣🤣**  
- Mixed values: **John123!!**

### **Steps to Reproduce**
1. Open **Promodizer Create**.  
2. Enter numeric/symbol/emoji values in name fields.  
3. Click Save.

### **Expected Result**
Names must contain only alphabetic characters.

### **Actual Result**
Invalid entries are saved.

### **Evidence**
Corrupted names appear in Promodizer List.

---

## ✅ Bug 27 — Store Fields Accept Long Special Character Strings
**Bug ID:** STORE-007  
**Title:** Store form accepts long chains of special characters  
**Module:** Store Create  
**Severity:** Medium  
**Priority:** Low  
**Type:** UI/Validation Bug  
**Environment:** Windows 10, Chrome 142  

### **Description**
Store fields accept extremely long special character inputs:
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣
These entries distort UI layout on the Store List page.

### **Steps to Reproduce**
1. Open **Store → Create Store**.  
2. Enter long sequences (100+ chars) in Name/Location/Contact fields.  
3. Save.

### **Expected Result**
Fields should enforce character limits.

### **Actual Result**
Long, invalid values are saved.

### **Evidence**
List view rows appear stretched or broken.

---

## ✅ Bug 28 — Store Duplicate City/State Fields Not Checked
**Bug ID:** STORE-008  
**Title:** Duplicate city/state values allowed  
**Module:** Store Create  
**Severity:** Low  
**Priority:** Low  
**Type:** Data Integrity Bug  
**Environment:** Windows 10, Chrome 142  

### **Description**
Store form accepts repetitive or duplicate geographic values such as:
- **Mumbai-Mumbai-Mumbai**

System performs no validation to prevent meaningless repeated city/state names.

### **Steps to Reproduce**
1. Create Store with City = "Mumbai".  
2. Create another with the same City/State.  
3. Save.

### **Expected Result**
System should validate repeated city/state data.

### **Actual Result**
Meaningless repeated values are saved.

### **Evidence**
Store List shows duplicated city-state entries.

---

## ✅ Bug 29 — Input Validation Missing Across All Modules (Global Issue)
**Bug ID:** GLOBAL-001  
**Title:** Missing unified validation rules across all forms  
**Module:** All Modules (SKU, Store, Supervisor, Promodizer, Sales)  
**Severity:** High  
**Priority:** High  
**Type:** System-Level Validation Bug  
**Environment:** Windows 10, Chrome 142  

### **Description**
System lacks a centralized validation standard.  
Across all modules, the system accepts:
- Emojis  
- Special characters  
- Wrong email formats  
- Wrong phone formats  
- Long corrupted text  
- Duplicate entries  
- Inconsistent input handling  

This is a **platform-wide validation failure**.

### **Steps to Reproduce**
1. Open any Create Page (SKU, Store, Supervisor, Promodizer).  
2. Enter invalid values.  
3. Save.

### **Expected Result**
All modules should follow centralized validation rules.

### **Actual Result**
Invalid inputs are accepted everywhere.

### **Evidence**
Repeated occurrences across all modules.

---
---

## ✅ Bug 30 — Promodizer Name Overflow Breaks UI Layout
**Bug ID:** PRO-008  
**Title:** Long Promodizer name overflows outside container  
**Module:** Promodizer Details (promodizer_details.html)  
**Severity:** Medium  
**Priority:** High  
**Type:** UI Layout / Responsive Bug  
**Environment:** Windows 10, Chrome 142  

### **Description**
When a Promodizer has a very long name (100+ characters), the text does not wrap correctly and overflows outside the UI card/container.  
This breaks the page layout and affects readability of other adjoining sections.

Affected Areas:
- Promodizer Information (Name field)
- Employee ID field
- Store Assignment list cards

### **Steps to Reproduce**
1. Create a Promodizer with a long name (e.g., 150+ characters).  
2. Go to **Promodizer → Details** page.  
3. Observe the Full Name and Employee ID sections.  

### **Expected Result**
- Long text should wrap within the container.  
- UI card should auto-adjust height.  
- Layout should remain aligned and readable.

### **Actual Result**
- Text extends beyond card boundaries.  
- Breaks layout into adjacent sections.  
- Causes UI stretching horizontally.

### **Evidence**
- Full Name text overflowing out of the container.  
<img width="150" height="150" alt="image" src="https://github.com/user-attachments/assets/dc92a20d-d67e-4883-925a-46930f429daa" />

- Assigned store card UI breaking due to long text.

---

## ✅ Bug 31 — Assigned Promodizers UI Breaks with Long Names
**Bug ID:** STORE-009  
**Title:** Assigned Promodizers list breaks UI for long names  
**Module:** Store Details → Assigned Promodizers  
**Severity:** Medium  
**Priority:** Medium  
**Type:** UI Layout / Overflow Bug  
**Environment:** Windows 10, Chrome 142  

### **Description**
In the **Assigned Promodizers** section, if a Promodizer has:
- Long Name  
- Long Employee ID  
- Symbols or special characters  

…the card layout breaks.  
The text overflows outside its container and overlaps with adjacent UI elements, making the list unreadable.

### **Steps to Reproduce**
1. Assign a Promodizer with a long name (100–200 characters) to any store.  
2. Go to **Store → Details** page.  
3. Scroll to **Assigned Promodizers**.  
4. Observe the UI rendering.

### **Expected Result**
- Assigned Promodizer cards should wrap content properly.  
- Long text should not overflow.  
- Layout should remain aligned within card boundaries.

### **Actual Result**
- Text goes outside the card boundary.  
- Layout breaks, causing misalignment of full section.  
- "Remove" link becomes displaced.

### **Evidence**
- Assigned Promodizer name stretching past card width.  
- Employee ID printed outside the container lines.
- <img width="150" height="150" alt="image" src="https://github.com/user-attachments/assets/199c6016-a617-44e3-bc1d-14d6a728c0e6" />


---


