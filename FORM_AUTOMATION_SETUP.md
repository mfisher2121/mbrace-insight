# Form Automation Setup - Market Intel Report & Portfolio Review

## Overview

Two n8n workflows have been created to handle form submissions:
1. **Market Intel Report** - For contractors requesting free reports
2. **Portfolio Review** - For PE platforms requesting portfolio analysis

Both forms now submit to n8n webhooks, store data in Data Tables, and send notification emails.

---

## n8n Workflows Created

### 1. Market Intel Report Workflow
**File**: `n8n-workflow-market-intel-report.json`
**Webhook Path**: `/webhook/market-intel-report`
**Webhook URL**: `https://n8n.mbrace.it.com/webhook/market-intel-report`

**Data Table**: `mbrace_market_intel_submissions`
**Columns**:
- `company_name` (Text)
- `website` (Text)
- `zip_code` (Text)
- `email` (Text)
- `form_type` (Text) - "market_intel_report"
- `submission_id` (Text)
- `submitted_at` (Text/DateTime)
- `page_url` (Text)
- `referrer` (Text)
- `user_agent` (Text)

### 2. Portfolio Review Workflow
**File**: `n8n-workflow-portfolio-review.json`
**Webhook Path**: `/webhook/portfolio-review`
**Webhook URL**: `https://n8n.mbrace.it.com/webhook/portfolio-review`

**Data Table**: `mbrace_portfolio_review_submissions`
**Columns**:
- `platform_name` (Text)
- `number_of_locations` (Text)
- `email` (Text)
- `form_type` (Text) - "portfolio_review"
- `submission_id` (Text)
- `submitted_at` (Text/DateTime)
- `page_url` (Text)
- `referrer` (Text)
- `user_agent` (Text)

---

## Setup Instructions

### Step 1: Import n8n Workflows

1. **Log into n8n**: `https://n8n.mbrace.it.com/`
2. **Import Market Intel Report workflow**:
   - Click "Workflows" → "Import from File"
   - Upload: `n8n-workflow-market-intel-report.json`
3. **Import Portfolio Review workflow**:
   - Click "Workflows" → "Import from File"
   - Upload: `n8n-workflow-portfolio-review.json`

### Step 2: Create Data Tables

#### Market Intel Report Table
1. Go to **"Data"** → **"Data Tables"** in n8n
2. Click **"Create Table"**
3. Name: `mbrace_market_intel_submissions`
4. Add columns (all Text type):
   - `company_name`
   - `website`
   - `zip_code`
   - `email`
   - `form_type`
   - `submission_id`
   - `submitted_at`
   - `page_url`
   - `referrer`
   - `user_agent`

#### Portfolio Review Table
1. Create another table: `mbrace_portfolio_review_submissions`
2. Add columns (all Text type):
   - `platform_name`
   - `number_of_locations`
   - `email`
   - `form_type`
   - `submission_id`
   - `submitted_at`
   - `page_url`
   - `referrer`
   - `user_agent`

### Step 3: Configure Email Notifications

1. **Market Intel Report workflow**:
   - Click on "Send Notification Email" node
   - Configure SMTP credentials (same as calculator workflow)
   - Update email addresses if needed

2. **Portfolio Review workflow**:
   - Click on "Send Notification Email" node
   - Configure SMTP credentials
   - Update email addresses if needed

### Step 4: Activate Workflows

1. **Activate Market Intel Report workflow**:
   - Toggle "Active" in top-right
   - Copy webhook URL: `https://n8n.mbrace.it.com/webhook/market-intel-report`

2. **Activate Portfolio Review workflow**:
   - Toggle "Active" in top-right
   - Copy webhook URL: `https://n8n.mbrace.it.com/webhook/portfolio-review`

---

## Form Implementation

The forms in `EntryPointSection.tsx` now:
- ✅ Submit to n8n webhooks
- ✅ Show loading states
- ✅ Show success states
- ✅ Display toast notifications
- ✅ Include metadata (submission_id, timestamps, page_url, referrer, user_agent)
- ✅ Reset after successful submission

---

## Testing

### Test Market Intel Report Form
1. Go to `https://mbraceinsight.com` or `https://mbraceintelligence.com`
2. Scroll to "Choose Your Entry Point" section
3. Fill out the green "Free Market Intel Report" form
4. Submit
5. Check:
   - ✅ Form shows loading state
   - ✅ Success message appears
   - ✅ n8n execution shows in "Executions"
   - ✅ Data appears in `mbrace_market_intel_submissions` table
   - ✅ Email notification received

### Test Portfolio Review Form
1. Same page, fill out orange "Portfolio Review (PE Only)" form
2. Submit
3. Check:
   - ✅ Form shows loading state
   - ✅ Success message appears
   - ✅ n8n execution shows in "Executions"
   - ✅ Data appears in `mbrace_portfolio_review_submissions` table
   - ✅ Email notification received

---

## Webhook URLs

**Market Intel Report:**
```
https://n8n.mbrace.it.com/webhook/market-intel-report
```

**Portfolio Review:**
```
https://n8n.mbrace.it.com/webhook/portfolio-review
```

⚠️ **Important:** Make sure to use `.com` in the domain (not just `n8n.mbrace.it`)

---

## Next Steps (Optional Enhancements)

1. **Auto-responder emails** to form submitters
2. **CRM integration** (HubSpot, Salesforce, etc.)
3. **Slack notifications** for high-priority submissions
4. **Lead scoring** based on company size, location, etc.
5. **Duplicate detection** to prevent spam

---

## Troubleshooting

### Forms not submitting?
- Check browser console for errors
- Verify n8n workflows are active
- Check webhook URLs are correct
- Verify CORS settings in n8n (if needed)

### No email notifications?
- Check SMTP credentials in n8n
- Verify email node is connected properly
- Check n8n execution logs for errors

### Data not appearing in tables?
- Verify table names match exactly
- Check column names match
- Review n8n execution logs for mapping errors

---

## Files Modified

- ✅ `client/src/components/EntryPointSection.tsx` - Added form handlers
- ✅ `n8n-workflow-market-intel-report.json` - Created workflow
- ✅ `n8n-workflow-portfolio-review.json` - Created workflow

All forms are now fully automated! 🚀

