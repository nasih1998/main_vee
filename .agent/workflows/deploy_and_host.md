---
description: Guide to host the Vee Pay website on Vercel and manage code on GitHub.
---

# Deployment and Hosting Guide

This guide will help you push your code to GitHub and deploy it to Vercel.

## Prerequisites

- A [GitHub](https://github.com/) account.
- A [Vercel](https://vercel.com/) account (you can sign up with GitHub).

## Step 1: Push to GitHub

I have already initialized a local Git repository for you. Now you need to configure your identity and connect it to GitHub.

1.  **Configure Git Identity** (if you haven't already):
    Run these commands in your terminal (replace with your details):
    ```bash
    git config --global user.email "you@example.com"
    git config --global user.name "Your Name"
    ```

2.  **Commit your code**:
    ```bash
    git add .
    git commit -m "Initial commit"
    ```

3.  **Create a new repository on GitHub**:
    - Go to [github.com/new](https://github.com/new).
    - Repository name: `veepay-website` (or any name you prefer).
    - Visibility: Public or Private (your choice).
    - **Do not** initialize with README, .gitignore, or License (we already have these).
    - Click **Create repository**.

2.  **Push your code**:
    - Copy the commands under "…or push an existing repository from the command line".
    - They will look like this (replace `YOUR_USERNAME` with your actual GitHub username):

    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/veepay-website.git
    git branch -M main
    git push -u origin main
    ```

    - Run these commands in your terminal.

## Step 2: Deploy to Vercel

Vercel is the creators of Next.js and offers the best hosting experience.

1.  **Import Project**:
    - Go to your [Vercel Dashboard](https://vercel.com/dashboard).
    - Click **Add New...** -> **Project**.
    - Select **Continue with GitHub**.
    - Find your `veepay-website` repository and click **Import**.

2.  **Configure Project**:
    - **Framework Preset**: Next.js (should be auto-detected).
    - **Root Directory**: `./` (default).
    - **Environment Variables**: You don't have any required env vars yet, so you can skip this.
    - Click **Deploy**.

3.  **Wait for Build**:
    - Vercel will build your project. It usually takes about a minute.
    - Once done, you will get a live URL (e.g., `veepay-website.vercel.app`).

## Feature Updates

To add new features in the future:

1.  Make changes to your code locally.
2.  Commit your changes:
    ```bash
    git add .
    git commit -m "Description of changes"
    ```
3.  Push to GitHub:
    ```bash
    git push
    ```
4.  Vercel will **automatically** detect the push and redeploy your website with the new changes!
