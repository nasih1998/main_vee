---
description: Guide to host the Vee Pay website on Hostinger (Shared Hosting).
---

# Hostinger Deployment Guide

This guide will help you deploy your static Next.js website to Hostinger Shared Hosting.

## Prerequisites

- A Hostinger account with a Shared Hosting plan.
- Access to the Hostinger hPanel.

## Step 1: Build the Project

I have already configured your project for "Static Export". Now you need to generate the files.

1.  Open your terminal in VS Code.
2.  Run the build command:
    ```bash
    npm run build
    ```
3.  This will create a new folder called **`out`** in your project directory.
    - This folder contains `index.html`, `about`, `products`, etc.
    - **These are the only files you need to upload.**

## Step 2: Prepare for Upload

1.  Go to the **`out`** folder in your file explorer.
2.  Select **ALL** files and folders inside `out`.
3.  Right-click and **Compress** (Zip) them into a single file, e.g., `website.zip`.

## Step 3: Upload to Hostinger

1.  Log in to your **Hostinger hPanel**.
2.  Go to **Websites** and click **Manage** on your domain.
3.  Search for **File Manager** and open it.
4.  Navigate to the **`public_html`** folder.
    - *Note: If there is a `default.php` file, delete it.*
5.  Click the **Upload** icon (up arrow) in the top right.
6.  Select your `website.zip` file and upload it.

## Step 4: Extract and Go Live

1.  Right-click on the uploaded `website.zip` in File Manager.
2.  Select **Extract**.
    - Choose `.` (current directory) or just leave it as is to extract into `public_html`.
3.  **Important**: Make sure the files (`index.html`, `_next`, etc.) are directly inside `public_html`, not inside a subfolder like `out`.
    - If they are in a subfolder, go into it, select all, move them to `public_html`, and delete the empty subfolder.
4.  Visit your domain (e.g., `veepay.iq`). Your site should be live!

## Troubleshooting

- **404 Errors**: I included a `.htaccess` file to handle 404 errors. Make sure it's uploaded.
- **Images missing**: I configured `unoptimized: true` so images should work fine.
- **Changes not showing**: Clear your browser cache or Hostinger cache (if enabled).
