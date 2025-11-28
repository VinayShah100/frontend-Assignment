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
| **Supervisor Module**     | 5 Bugs        |
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
| SUP-005   | Missing Back button on Supervisor Details page                   | Medium       | Open       |
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
<img width="940" height="143" alt="image" src="https://github.com/user-attachments/assets/eedf55ca-6f5d-4aaf-b86b-d4f7e840970d" />


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
<img width="940" height="136" alt="image" src="https://github.com/user-attachments/assets/7097ccc8-401b-4643-9b2c-fa554cb22fbc" />


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
<img width="940" height="235" alt="image" src="https://github.com/user-attachments/assets/175df918-2481-4e62-b3e7-869e652037d6" />


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

## ✅ Bug 32 — Missing Back Button on Supervisor Details Page
**Bug ID:** SUP-005  
**Title:** Supervisor Details page has no Back button for navigation  
**Module:** Supervisor Details (supervisor_details.html)  
**Severity:** Medium  
**Priority:** Medium  
**Type:** UI/Navigation Defect  
**Environment:** Windows 10, Chrome 142  
**Precondition:** Supervisor record exists and is opened from the Supervisor List  

### **Description**
The Supervisor Details page does not provide a Back button or navigation link for returning to the Supervisor List.  
Users are forced to rely on the browser Back button, which is not a recommended UX navigation method and causes inconsistency with other modules.

### **Steps to Reproduce**
1. Navigate to **Supervisors → Supervisor List**.  
2. Click on any Supervisor to open the **Details** page.  
3. Observe the top header and page UI.

### **Expected Result**
- A Back button (e.g., “← Back to Supervisors List”) should be visible.  
- Users should be able to navigate back without using the browser’s back button.  
- Navigation should be consistent with other modules such as Stores, SKUs, and Promodizers.

### **Actual Result**
- No Back button is present on the Supervisor Details page.  
- User must use the browser’s Back button to exit the page.  
- Navigation inconsistency across modules.

### **Impact**
- Poor user experience and navigation flow.  
- Users may get stuck, especially on mobile devices where browser back is not always visible.  
- Inconsistent design across the portal.

### **Evidence**
- Screenshot shows no Back button in Supervisor Details layout.
- <img width="200" height="200" alt="image" src="https://github.com/user-attachments/assets/c7bbf8f7-8eab-46f5-94be-0befd04c8a65" />






---


## 📘 Section 2: Promodizer Portal – Introduction

This section documents all bugs identified within the **Promodizer Portal** of the GTVL Management System.  
The Promodizer Portal covers daily operations performed by field Promodizers, including:

- Dashboard access  
- Recording sales  
- Viewing attendance  
- Managing assigned stores  
- Reviewing sales history  
- Navigating using Back/Home icons  
- Working with interactive pop-ups and batch items  

The objective of this section is to capture issues that directly affect  
**usability, navigation flow, data accuracy, and system responsiveness** for Promodizers.  
All bugs listed here have been validated through manual testing across multiple screens and actions.

Bug IDs in this section start fresh from **BUG-001** and follow a consistent structure for clarity and traceability.

---

## 🧮 Section Summary – Promodizer Portal Bugs

Total Bugs in Promodizer Portal: **7 Bugs**

High Severity:    2  
Medium Severity:  4  
Low Severity:     1  


| Bug ID | Issue Summary                                        | Severity | Status |
|--------|--------------------------------------------------------|----------|--------|
| BUG-001 | Attendance calendar shows wrong date data            | High     | Open   |
| BUG-002 | Sales History not displaying saved sales records     | High     | Open   |
| BUG-003 | Attendance pop-up cannot be closed (X & outside click) | Medium   | Open   |
| BUG-004 | Calendar month/year navigation not working           | Medium   | Open   |
| BUG-005 | Back arrow needs multiple clicks to respond          | Medium   | Open   |
| BUG-006 | Home button unresponsive on first click              | Medium   | Open   |
| BUG-007 | Back & Home icons missing hover feedback             | Low      | Open   |



# SECTION 2: PROMODIZER PORTAL  
This section documents all defects identified in the Promodizer Portal, covering UI, functional behavior, navigation, and data consistency issues.  
Bug IDs restart from **BUG-001** for this module.

---
## 🪲 Bug 1: Calendar Showing Wrong Date on Selection

**1. Bug Title**  
Attendance Calendar Displays Incorrect Date Data

**2. Description**  
When clicking on a date inside the Attendance Calendar (example: **29th**), the system loads attendance data for **28th** instead of 29th.  
This indicates a date mismatch or off-by-one error in the calendar's data mapping.

**3. Steps to Reproduce**  
a. Open Promodizer Portal.  
b. Navigate to **Attendance → Attendance History**.  
c. Switch to **Calendar View**.  
d. Click on **29th**.  
e. Observe that attendance data shown belongs to **28th** instead.

**4. Expected Result**  
- Selected date should show its correct attendance data.  
- 29th should display 29th’s attendance record.  

**5. Actual Result**  
- Clicking 29th opens data for 28th.  
- Attendance pop-up shows wrong date information.  
- Calendar is mapping data to the wrong index.

**6. Severity & Priority**  
Severity: **High**  
Priority: **High**

**7. Evidence**  
- Date mismatch observed on attendance pop-up.  
- <img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/24dd610f-4cbe-4b8f-92fa-ddecc884a323" />




---

## 🪲 Bug 2: Sales History Not Displaying Saved Sales Records

**1. Bug Title**  
Sales History Page Not Showing Recorded Sales

**2. Description**  
After completing a sales submission in the Promodizer Portal, the **Sales History** page does not display any sales entries.  
When the user selects a specific sales record, the **Sales Detail** page shows the message:

> *“Sales record not found — The requested sales submission could not be found or may have been deleted.”*

This indicates that either:
- Sales data is not being saved,  
- Or the Sales History page is not fetching the stored data correctly.

**3. Steps to Reproduce**  
a. Log in to the **GTVL Promodizer Portal**.  
b. Navigate to **Record Sales**.  
c. Scan or manually enter a barcode.  
d. Add quantity and submit the batch.  
e. Wait for the success toast confirming the submission.  
f. Go to **Sales History**.  
g. Observe that no sales appear in the list.  
h. Click on any expected record → redirected to Sales Detail shows “Sales record not found.”

**4. Expected Result**  
- All successfully recorded sales should be saved to the database.  
- They must appear immediately in **Sales History**.  
- Clicking a record should open the correct **Sales Detail** page.

**5. Actual Result**  
- Sales History remains **blank** after submission.  
- Clicking the supposed sales detail leads to a **“Sales record not found”** error page.  
- No historical sales are stored or retrieved.

**6. Severity & Priority**  
Severity: **High**  
Priority: **High**

**7. Evidence**  
- **Sales Detail page screenshot** shows error message.  
- URL tested:
- <img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/033a6e87-ebad-443d-bd06-b8a087588f36" />

  




## 🪲 Bug 3: Attendance History Pop-Up Not Closing

**1. Bug Title**  
Attendance History Pop-Up Does Not Close on X or Outside Click

**2. Description**  
Attendance details pop-up stays open and cannot be closed using the Close (X) icon or by clicking outside.

**3. Steps to Reproduce**  
a. Navigate to Attendance → Calendar View.  
b. Click any date to open pop-up.  
c. Click X → no response.  
d. Click outside → still no response.

**4. Expected Result**  
- Pop-up should close when clicking X.  
- Pop-up should close when clicking outside modal.

**5. Actual Result**  
- Pop-up remains stuck.  
- User must refresh the page.

**6. Severity & Priority**  
Severity: **Medium**  
Priority: **Medium**

**7. Evidence**  
- Close button unresponsive  
- Clicking outside does nothing  

---

## 🪲 Bug 4: Calendar Month/Year Navigation Not Working

**1. Bug Title**  
Calendar Navigation Arrows Not Responding

**2. Description**  
Month and year navigation arrows do not change the calendar view.

**3. Steps to Reproduce**  
a. Go to Attendance → Calendar View.  
b. Click the left or right arrow.  
c. Calendar does not move.

**4. Expected Result**  
Calendar should update to the previous or next month/year.

**5. Actual Result**  
- No response from arrows  
- Sometimes changes after repeated clicking

**6. Severity & Priority**  
Severity: **Medium**  
Priority: **Medium**

**7. Evidence**  
- Calendar stuck on same month
- <img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/0799b0ef-4407-4606-98a8-08367c07d7d9" />


---

## 🪲 Bug 5: Back Arrow Not Responding on First Click

**1. Bug Title**  
Back Arrow Requires Multiple Clicks on Record Sales Page

**2. Description**  
The Back arrow does not respond on the first click.  
User must click 2–3 times.

**3. Steps to Reproduce**  
a. Login to Promodizer Portal.  
b. Open Record Sales.  
c. Click Back arrow once → no response.

**4. Expected Result**  
Back arrow should work on the first click.

**5. Actual Result**  
- No action on first click  
- Works after multiple attempts

**6. Severity & Priority**  
Severity: **Medium**  
Priority: **High**

**7. Evidence**  
- Back arrow unresponsive  

---

## 🪲 Bug 6: Home Button Not Responding on First Click

**1. Bug Title**  
Home Button Requires Multiple Clicks to Navigate

**2. Description**  
Home icon does not work on the first click.

**3. Steps to Reproduce**  
a. Login to Promodizer Portal.  
b. Navigate to Record Sales.  
c. Click Home icon.

**4. Expected Result**  
Home should open Dashboard instantly.

**5. Actual Result**  
- No action on first click  
- Works only after 2–3 clicks

**6. Severity & Priority**  
Severity: **Medium**  
Priority: **High**

**7. Evidence**  
- Home icon unresponsive initially  


---

## 🪲 Bug 7: Hover Effect Missing on Back & Home Icons

**1. Bug Title**  
Back & Home Icons Have No Hover Feedback

**2. Description**  
On My Stores page, hovering over Back or Home icons shows no visual feedback.

**3. Steps to Reproduce**  
a. Go to Dashboard → My Stores.  
b. Hover over Back or Home icons.

**4. Expected Result**  
Cursor should change to pointer, and icons should have hover styling.

**5. Actual Result**  
No hover effect → icons look non-clickable.

**6. Severity & Priority**  
Severity: **Low**  
Priority: **Medium**

**7. Evidence**  
- No hover state effect  

---


# SECTION 3: SALES ANALYTICS – SKU PERFORMANCE

This section captures UI and functional defects found under the **Sales Analytics Dashboard → SKU Performance** module.

The issues involve incorrect date range handling, export functionality, and UI layout misalignment within filters.  
All defects are documented using a standardized bug-reporting structure for consistency and traceability.

---

## 🐞 Bug Count Summary by Module (Sales Analytics)

| Module                                   | Bug Count |
|------------------------------------------|-----------|
| SKU Performance                          | 2 Bugs    |
| Store Performance                        | 3 Bugs    |
| Staff Performance                        | 3 Bugs    |
| Transaction History                      | 2 Bugs    |
| Reports Module                           | 1 Bug     |
| Global UI/Responsive (Sales Analytics)   | 1 Bug     |

**Total Bugs in Sales Analytics Section: 11**
---

## 🐞 Complete Bug Summary Table (Sales Analytics)

| Bug ID        | Issue Summary                                                      | Severity | Status |
|---------------|--------------------------------------------------------------------|----------|--------|
| SA-SKU-001    | Custom date range not working for export                           | High     | Open   |
| SA-SKU-002    | Total Quantity Sold input UI overflow in filter panel              | Medium   | Open   |
| SA-UI-003     | Responsive/mobile UI not working on some devices                   | High     | Open   |
| SA-SP-004     | Store Performance “Last Sale / Date” column cut off                | Medium   | Open   |
| SA-SP-005     | Store Detail page not loading KPI & chart data                    | High     | Open   |
| SA-SP-006     | Sales Trend Export button not working on Store Detail page         | Medium   | Open   |
| SA-SPF-007    | Staff Performance date field accepts more than 4-digit year        | Medium   | Open   |
| SA-SPF-008    | Staff search chip (X) close button not working                     | Medium   | Open   |
| SA-SPF-009    | Table View / Chart View toggle not working                         | High     | Open   |
| SA-TH-010     | Transaction History date fields accept invalid year formats        | Medium   | Open   |
| SA-TH-011     | Transaction History filter-tag close (X) not working               | High     | Open   |

---

# 🪲 **Bug Report SA-SKU-001: Custom Date Range Not Working for Export**

**1. Bug Title**  
Custom Date Range Not Working for Export

**2. Description**  
When selecting **Custom** in the **Date Range** dropdown under SKU Performance, the system does **not display** any date input fields (from/to).  
Because of this, the **Export** button cannot generate custom-range reports.

No calendar pop-up or manual input fields appear.

**3. Steps to Reproduce**  
a. Navigate to **Sales Analytics Dashboard**.  
b. Go to **SKU Performance**.  
c. Click **Date Range** dropdown.  
d. Select **Custom**.  
e. Try clicking **Export**.

**4. Expected Result**  
- From/To date fields should appear.  
- User should select a valid custom date range.  
- Export should generate a report based on selected dates.

**5. Actual Result**  
- No date inputs appear.  
- Export does nothing for custom range.  
- System behaves as if Custom was never selected.

**6. Severity & Priority**  
Severity: **High**  
Priority: **High**

**7. Evidence**  
- No date selection UI shown after choosing Custom.  
- Export remains non-functional.
- <img width="1570" height="238" alt="image" src="https://github.com/user-attachments/assets/2d807eec-f608-4afe-9442-73df3d35073c" />


---

# 🪲 **Bug Report SA-SKU-002: Quantity Sold Input Overflowing from Filter Panel**

**1. Bug Title**  
Total Quantity Sold Input Field Overflowing from Filter UI Panel

**2. Description**  
In the Filters panel of the SKU Performance page, the **“Total Quantity Sold”** Min–Max input boxes overflow outside the filter container, breaking the layout and causing clipped UI.

**3. Steps to Reproduce**  
a. Open **Sales Analytics Dashboard**.  
b. Click **SKU Performance**.  
c. Scroll to the **Filters** section.  
d. Observe the **Min–Max** input row under Total Quantity Sold.

**4. Expected Result**  
- Input fields should remain inside the filter panel.  
- Proper padding/margin and responsive alignment.

**5. Actual Result**  
- Max input field overflows outside box.  
- UI clip visible on right side.

**6. Severity & Priority**  
Severity: **Medium**  
Priority: **Medium**

**7. Evidence**  
- Screenshot shows Max textbox escaping filter container.
- <img width="523" height="557" alt="image" src="https://github.com/user-attachments/assets/50cb0f36-dae8-42bc-908b-2e9f6e305e78" />


---

# 🪲 Bug Report SA-UI-003: Responsive UI / Mobile Layout Not Working on Some Devices & Browsers

**1. Bug Title**  
Responsive UI and Mobile Menu Not Working on Certain Devices/Browsers

**2. Description**  
The responsive mobile layout does not behave consistently across different devices and browsers.  
On some screens, the **menu (hamburger) doesn’t open**, layouts break, or pages do not adjust properly to mobile/tablet resolutions.

Common issues observed:
- Hamburger menu not opening  
- Sidebar overlapping content  
- Pages not adjusting to mobile width  
- Filter sections overflowing  
- Buttons shifting out of screen  

**3. Steps to Reproduce**
a. Open the Sales Analytics / SKU Performance / Store Performance pages on:  
   - Smaller Android devices  
   - Older iPhones  
   - Chrome Mobile, Firefox Mobile, Brave  
b. Try opening the **hamburger menu**.  
c. Resize page or switch orientation to landscape.  
d. Observe responsive behavior.  

**4. Expected Result**
- All pages should fully support mobile & tablet resolutions.  
- Hamburger menu should open on every device.  
- Elements should auto-adjust without overflow.  
- Layout should remain visually stable on all major browsers.

**5. Actual Result**
- Menu does not open on some devices.  
- Layout breaks / elements overlap.  
- Filter panel overflows.  
- UI not responsive in certain browser-device combinations.

**6. Severity & Priority**
Severity: **High**  
Priority: **High**

**7. Evidence**
- Tested using multiple devices (Android/iOS)  
- Browser compatibility issues found  
- Elements breaking and menu not opening  
<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/e44e9042-56d3-400f-92c7-dec5e155a420" />

## 🪲 Bug Report SA-SP-004: Store Performance “Date” Column UI Cut Off / Not Visible
---

**1. Bug Title**  
Store Performance “Date / Last Sale” Column Not Fully Visible (UI Cut Off)

**2. Description**  
In the **Sales Analytics → Store Performance** page, the last column (Last Sale / Date) is partially cut off on the right side.  
The table overflows horizontally, causing the column to be hidden or only partially visible.

This issue occurs especially on:
- Smaller laptop screens  
- Browser windows not fully maximized  
- Responsive layouts  

**3. Steps to Reproduce**  
a. Open **Sales Analytics Dashboard**  
b. Navigate to **Store Performance**  
c. Scroll horizontally or resize window  
d. Observe the last column (Last Sale Date)  

**4. Expected Result**  
- Full table should remain visible within the UI container  
- Last column should not overflow or become hidden  
- Table should auto-adjust to available width  

**5. Actual Result**  
- Last column is partially hidden or cut off  
- Scroll bar sometimes does not appear  
- Data becomes unreadable  

**6. Severity & Priority**  
Severity: **Medium**  
Priority: **High**

**7. Evidence**  
- UI screenshot: last column partially cut off  
- Visible overflow of table container
- <img width="1226" height="491" alt="image" src="https://github.com/user-attachments/assets/d411bfcf-7074-4d36-b998-35af18beaf51" />


---


## 🪲 Bug Report SA-SPF-005: Date Input Allows More Than 4-Digit Year

**1. Bug Title**  
Date Range Input Accepts Invalid Year Format (More Than 4 Digits)

**2. Description**  
In the **Sales Analytics → Staff Performance** filters, the Date Range fields allow users to enter years longer than 4 digits.  
Example:  
- `09-09-275759`  
- `08-08-888888`

This indicates missing validation on the date input fields.

**3. Steps to Reproduce**
a. Open **Sales Analytics Dashboard**  
b. Navigate to **Staff Performance**  
c. Go to the **Date Range** section  
d. Manually type a year longer than 4 digits (e.g., 08-08-888888)  
e. Observe that the UI accepts and displays the invalid date

**4. Expected Result**
- Year should be restricted to **4 digits only**  
- Input mask should enforce valid date formats (DD-MM-YYYY)  
- Invalid dates should trigger validation error

**5. Actual Result**
- Date field accepts years with more than 4 digits  
- No validation error  
- Invalid date still processed by the filter

**6. Severity & Priority**
Severity: **Medium**  
Priority: **High**

**7. Evidence**
- Screenshot shows invalid year (08-08-888888) accepted by UI  
<img width="354" height="300" alt="image" src="https://github.com/user-attachments/assets/197c6039-454f-4c7f-9758-1970a35f1b12" />
---

## 🪲 Bug Report SA-SPF-006: Search Chip Close (X) Button Not Working

**1. Bug Title**  
Search Filter Chip Close (X) Icon Not Responding

**2. Description**  
In the **Staff Performance** page under Sales Analytics, when the user performs a search, a search chip appears (e.g., *Search: "abc"*).  
The **Close (X)** icon on this search chip does **not clear the search filter**, making it impossible for the user to remove the search query without manually clearing the text box.

**3. Steps to Reproduce**
a. Open **Sales Analytics Dashboard**  
b. Navigate to **Staff Performance**  
c. Type any text into the search input (e.g., "sfdsgfdfdvdsfsd")  
d. A search chip appears below the input  
e. Click the **X** icon on the chip  
f. Observe that it does nothing

**4. Expected Result**
- Clicking the **X** should immediately clear the search filter  
- Search chip should disappear  
- Table data should reset to the default unfiltered state  

**5. Actual Result**
- X icon does not respond  
- Search filter remains active  
- No UI update occurs

**6. Severity & Priority**
Severity: **Medium**  
Priority: **Medium**

**7. Evidence**
- Search chip remains visible after clicking X  
- Data stays filtered  
- Screenshot shows the non-functional chip
<img width="613" height="221" alt="image" src="https://github.com/user-attachments/assets/58fbefcf-587a-48c4-9cd1-b4970ad1f71b" />

---
## 🪲 Bug Report SA-SPF-007: Table View & Chart View Toggle Not Working

**1. Bug Title**  
Store Performance – Table View and Chart View Buttons Not Responding

**2. Description**  
On the **Store Performance** page within the Sales Analytics Dashboard, the **Table View** and **Chart View** toggle buttons do not perform any action when clicked.  
The page remains stuck on the default view, and users cannot switch between table mode and chart visualization.

**3. Steps to Reproduce**
a. Navigate to **Sales Analytics Dashboard**  
b. Click **Store Performance** in the left menu  
c. Observe the toggle buttons: **Table View** and **Chart View**  
d. Click **Chart View** → No change  
e. Click **Table View** again → No change  
f. The UI does not switch views under any condition

**4. Expected Result**
- Clicking **Chart View** should switch the UI to a chart-based performance visualization  
- Clicking **Table View** should return to the table layout  
- Transition should be smooth and responsive  

**5. Actual Result**
- Both buttons appear clickable but do nothing  
- No view change occurs  
- Page remains stuck on table view  

**6. Severity & Priority**
Severity: **High**  
Priority: **High**

**7. Evidence**
- User interface remains static despite clicking view buttons  
- Screenshot shows Table View selected but no toggle behavior  
<img width="1229" height="413" alt="image" src="https://github.com/user-attachments/assets/bf87d729-cc28-4783-a6ff-5efdac12ed8f" />

---

## 🪲 Bug Report SA-TH-008: Invalid Date Format Accepted in Transaction History Filters

**1. Bug Title**  
Transaction History – Date Range Fields Accept Invalid Year Formats

**2. Description**  
The **Transaction History** page accepts invalid date formats, especially when the user manually types values.  
The **Year** section allows more than 4 digits (e.g., *275760*, *777777*), which breaks filtering accuracy and may cause backend errors.

This indicates missing client-side and server-side validation for date inputs.

**3. Steps to Reproduce**
a. Open **Sales Analytics Dashboard**  
b. Navigate to **Transaction History**  
c. Go to **Filters → Date Range**  
d. Click inside the date input field (From or To date)  
e. Type a year longer than 4 digits (e.g., 07-07-777777)  
f. Observe that the system accepts it without validation  

**4. Expected Result**
- Date fields should strictly follow valid formats: **DD-MM-YYYY**  
- Year must be restricted to **4 digits only (0000–9999)**  
- Invalid input should trigger a validation message  

**5. Actual Result**
- System accepts extremely large year values (e.g., 275760, 777777)  
- Filters still execute with incorrect date formats  
- No validation error or restriction shown  

**6. Severity & Priority**
Severity: **Medium**  
Priority: **High**

**7. Evidence**
- User manually entering year: *275760*, *777777*  
- No validation or error prompts  
- UI screenshot shows incorrect date being accepted
<img width="917" height="380" alt="image" src="https://github.com/user-attachments/assets/6fb48852-b91f-4428-aced-cc06e403c0b9" />

---
## 🪲 Bug Report SA-TH-009: Filter Tag Close (X) Button Not Working

**1. Bug Title**  
Transaction History – Applied Filter Tags Cannot Be Removed Using Close (X)

**2. Description**  
In the **Transaction History** page, after applying any filter (Date Range, Stores, Staff, etc.), the system shows filter tags at the top.  
However, the **Close (X)** button on these tags does not remove the selected filter.

Users are forced to click **Clear All**, as individual filters cannot be removed.

**3. Steps to Reproduce**
a. Navigate to **Sales Analytics Dashboard → Transaction History**  
b. Apply any filter (Example: Date Range, Staff, Stores, Search)  
c. Notice filter tags appear (e.g., *Date: from 275760-03-23*, *Staff: 6 selected*)  
d. Click the **X** on any tag  
e. Observe that nothing happens  

**4. Expected Result**
- Clicking the **X** on a filter tag should immediately remove that specific filter  
- Page should refresh results accordingly  

**5. Actual Result**
- X button does not respond  
- Filter remains active  
- Users must click **Clear All** to reset all filters  

**6. Severity & Priority**
Severity: **Medium**  
Priority: **High**

**7. Evidence**
- Filter tags visible but cannot be removed  
- Clicking X produces no UI change  
- Screenshot shows the tag with non-functioning close button
<img width="1230" height="193" alt="image" src="https://github.com/user-attachments/assets/e62af6ea-43ab-4902-a019-245c9110cfca" />

---

## 🪲 Bug  SA-TH-009: Store Performance Detail Page Not Loading Data

**1. Bug Title**  
Store Performance Details Page Shows Empty Metrics Even When Data Exists in List View

**2. Description**  
On the Sales Analytics Dashboard → Store Performance module, the list view displays valid store performance data (quantity sold, transactions, SKUs sold, staff count).  
However, when clicking on any store to open its **Store Detail Page**, all statistics (Total Quantity Sold, Total Transactions, Unique SKUs Sold, Active Staff) display **0** or blank, and no chart data is loaded.

This indicates that store-level analytics are not being fetched or passed correctly to the detail page.

**3. Steps to Reproduce**  
a. Open **Sales Analytics Dashboard**.  
b. Click **Store Performance**.  
c. Observe values in the table — for example:  
   - Quantity Sold = 56  
   - Transactions = 3  
   - SKUs Sold = 8  
d. Click on the store → opens **Store Detail Page**.  
e. Observe that all displayed stats are **0**, and chart section is empty.

**4. Expected Result**  
- Store detail page should display accurate analytics based on selected store.  
- Chart and KPIs should load real data (same values shown in list view).  

**5. Actual Result**  
- All KPIs display **0**.  
- Sales Trend chart shows no data.  
- Page loads, but API/data-binding fails.

**6. Severity & Priority**  
- **Severity:** High  
- **Priority:** High  

**7. Evidence**  
- List view shows correct data (e.g., 56 quantity sold).  
- Detail view shows 0 for all metrics.  
- Chart blank.  
<img width="1526" height="672" alt="image" src="https://github.com/user-attachments/assets/03dd4ee2-66ce-4e1e-bd48-d9afaf7bf965" />

---
## 🪲 Bug  SA-TH-0010: Sales Trend Export Button Not Working on Store Performance Detail Page

**1. Bug Title**  
Export Button Not Functioning in Sales Trend Section

**2. Description**  
On the Store Performance → Store Detail page, the **Export** button located in the Sales Trend section does not perform any action when clicked.  
There is **no file download**, **no loading state**, and **no visible API call**, indicating either missing functionality or broken event binding.

**3. Steps to Reproduce**  
a. Open **Sales Analytics Dashboard**.  
b. Navigate to **Store Performance**.  
c. Click any store → Open **Store Detail Page**.  
d. Scroll to the **Sales Trend** section.  
e. Click the **Export** button (top-right of Sales Trend chart).  
f. Observe no action.

**4. Expected Result**  
- Clicking the Export button should download a CSV/Excel/PDF file containing sales trend data.  
- A loading state or API call should be triggered.  
- If no data is available, a message like **“No data to export”** should appear.

**5. Actual Result**  
- Button shows **no response**.  
- No file is downloaded.  
- No API call is triggered.  
- No validation or error message is shown.

**6. Severity & Priority**  
- **Severity:** Medium  
- **Priority:** High (Export is a critical analytics function)

**7. Evidence**  
- Button visible but unresponsive.  
- Chart loads (even empty), but export functionality does nothing.  
- Screenshot provided.  
<img width="1472" height="195" alt="image" src="https://github.com/user-attachments/assets/ac45f488-a4ff-409b-95ff-878b9aabf29d" />

---

## 🪲 Bug  SA-TH-011: Reports Not Generated After Selecting Valid Filters

**1. Bug Title**  
Reports Page Always Shows “No Data Found” Even When Valid Data Exists

**2. Description**  
When generating reports from the Sales Analytics Dashboard, the system shows:

> **“No Data Found — No sales data matches the selected report criteria.”**

even when valid data exists for the selected date range, stores, and filters.

The report_display.html page loads successfully but **does not fetch or display any report data**, indicating either a missing API connection, incorrect filter mapping, or a broken data-fetch function.

**3. Steps to Reproduce**  
a. Navigate to **Sales Analytics Dashboard → Reports**  
b. Configure a report with valid:  
   - Date range  
   - Store(s)  
   - Staff / SKU filters  
c. Click **Generate Report**  
d. System redirects to `report_display.html`  
e. Page shows **No Data Found** even when data is present in Sales History and Store Performance sections.

**4. Expected Result**  
- System should load and display report data matching the selected filters.  
- A visual report (tables, charts, or summary metrics) should appear.  
- Export options should work if data is available.

**5. Actual Result**  
- Report page always displays **No Data Found**  
- No data rendering occurs  
- No API/DB fetch is triggered or data returns empty  
- User cannot generate or export any reports

**6. Severity & Priority**  
- **Severity:** High  
- **Priority:** High  
(Reporting is a critical analytics feature)

**7. Evidence**  
- Screenshot shows empty report with “No Data Found”  
- Data **does exist** in Sales History / Store Detail pages  
- URL tested:  
  <img width="976" height="457" alt="image" src="https://github.com/user-attachments/assets/4bc04312-99bb-44c2-b6e9-ebca2bb8cf44" />

  ---
# SECTION 4: SUPERVISOR PORTAL – ADD PROMODIZER MODULE

This section documents validation and input-handling issues found in the  
**GTVL Supervisor Portal → Add Promodizer** module.

The defects primarily involve **missing field validations**, allowing invalid, corrupted, or unsafe data to be submitted. This impacts data integrity, reporting accuracy, and employee identity management.

---

## 📊 Bug Summary Table

| Bug ID | Issue Summary                                        | Severity | Status |
|--------|--------------------------------------------------------|----------|--------|
| SP-AP-001 | Hamburger menu not closing on some browsers/devices | High     | Open   |
| SP-AP-002 | Date format accepts invalid year values             | Medium   | Open   |
| SP-AP-003 | Add Promodizer form accepts invalid inputs          | High     | Open   |

**Total Bugs in This Section: 3**


---

# 🪲 Bug Report SUP-RESP-001: Hamburger Menu Not Closing on Some Devices/Browsers

**1. Bug Title**  
Hamburger Menu Does Not Close on Certain Devices/Browsers

**2. Description**  
In the **GTVL Supervisor Portal**, the hamburger menu opens correctly but fails to close on certain devices and browsers.  
The menu remains stuck open, blocking page interaction and preventing navigation.

This issue occurs on:
- Android Chrome (small/medium devices)  
- Firefox Mobile  
- Brave Browser  
- Older iOS/Safari devices  

The menu does **not close** when:
- clicking the hamburger icon again  
- tapping outside the navigation drawer  
- attempting to swipe-close

**3. Steps to Reproduce**  
a. Open **GTVL Supervisor Portal** on a mobile or tablet browser  
b. Tap the **hamburger menu** (☰)  
c. Try closing it by tapping again or clicking outside  
d. Observe that the menu does not close  

**4. Expected Result**  
- Menu should open and close smoothly  
- Clicking outside the menu should close it  
- Responsive behavior should work across all common mobile browsers  

**5. Actual Result**  
- Menu opens but **does not close**  
- Overlay remains active  
- User cannot interact with the page  
- Navigation becomes stuck  

**6. Severity & Priority**  
Severity: **High**  
Priority: **High**

**7. Evidence**  
- Screenshot shows menu stuck open on device  
- Covers entire UI and does not close  

<img width="350" alt="image" src="https://github.com/user-attachments/assets/aa3ba28e-6381-42f3-86cf-d5d40a166738" />

---

## 🪲 Bug Report SP-SH-002: Invalid Date Format Accepted in Sales History Page

**1. Bug Title**  
Sales History – Date Fields Accept Invalid Year Format (More Than 4 Digits)

**2. Description**  
On the **Supervisor Portal → Sales History** page, the **From Date** and **To Date** fields accept invalid date formats.  
Users can manually type a **year longer than 4 digits**, such as:

- `31-03-275760`  
- `31-03-567890`  

This causes incorrect filtering and breaks date-based reporting.

**3. Steps to Reproduce**  
a. Login to **GTVL Supervisor Portal**  
b. Navigate to **Sales History**  
c. Click inside **From Date** or **To Date** input  
d. Type an invalid date (e.g., `31-03-275760`)  
e. Click **Apply Filters**  
f. Observe that the system accepts the date without validation

**4. Expected Result**  
- Date input should strictly follow: **DD-MM-YYYY**  
- Year should only allow **4 digits**  
- Invalid formats must show validation error  
- Filters should not execute with invalid dates

**5. Actual Result**  
- System accepts invalid year values  
- No validation message  
- Filtering still attempts to run  
- UI displays incorrect date format

**6. Severity & Priority**  
Severity: **Medium**  
Priority: **High**

**7. Evidence**  
Screenshot shows invalid year accepted in date field:  
<img width="1221" height="357" alt="image" src="https://github.com/user-attachments/assets/f9ef8c49-d7c0-43b0-99d6-76d22b4c8283" />

---
## 🪲 Bug Report SP-AP-003: Add Promodizer Form Accepts Invalid & Unrestricted Inputs

**1. Bug Title**  
Add Promodizer Form – All Input Fields Accept Invalid Characters (No Validation Applied)

**2. Description**  
On the **Supervisor Portal → Add Promodizer** page, multiple fields accept invalid, unrestricted, or non-sanitized input.  
The system allows:

- Numbers and symbols in **First Name** / **Last Name**
- Letters, emojis, or random text in **Employee ID**
- Special characters and alphabets in **Phone Number**
- Incorrect formats in **Email Address** (missing '@', domain, etc.)

This indicates missing **client-side and server-side field validation**, allowing users to enter corrupted or unusable data.

**3. Affected Fields**

| Field | Expected | Actual |
|-------|----------|--------|
| First Name | Alphabets only | Accepts numbers, emojis, symbols |
| Last Name | Alphabets only | Accepts any type of characters |
| Employee ID | Defined pattern (e.g., PRO-2024-007) | Accepts random strings, emojis |
| Phone Number | Digits only | Accepts letters, symbols |
| Email Address | Valid email format | Accepts incomplete or invalid emails |

**4. Steps to Reproduce**  
a. Login to **GTVL Supervisor Portal**  
b. Navigate to **Add Promodizer**  
c. Enter invalid values such as:  
   - First Name → `@@@`, `1234`, `😀😀`  
   - Employee ID → `ABCXYZ!?`, `😎😎😎`  
   - Phone Number → `abc123`, `+++++`  
   - Email → `test@`, `wrongemail`, `abc123`  
d. Click **Add Promodizer**  
e. Observe that the form accepts and submits invalid input

**5. Expected Result**  
- Each field should follow strict validation rules  
- Form should reject invalid data  
- User should see proper validation messages (e.g., "Enter a valid email")  
- Input sanitization must be enforced

**6. Actual Result**  
- Form accepts **any data** without restriction  
- No validation errors shown  
- Invalid data can be saved to the database

**7. Severity & Priority**  
Severity: **High**  
Priority: **High**

**8. Evidence**  
- Screenshot shows Add Promodizer form with unrestricted input behavior  
- Multiple fields allow invalid formats  
<img width="1574" height="176" alt="image" src="https://github.com/user-attachments/assets/199be731-15a5-4425-9e9a-c0945c0e3e7b" />
















