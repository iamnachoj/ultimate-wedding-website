# 💍 Ultimate Wedding Website

A modern, elegant and reusable wedding website built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **shadcn/ui** and **Supabase**.

The goal of this project is to provide a beautiful, responsive wedding website that can be reused for any couple simply by changing a single data file and a few images.

---

# Features

- ✨ Beautiful responsive landing page
- 📖 Couple story section
- 💒 Ceremony & celebration details
- 👗 Dress code section
- ❓ FAQ with animated expandable questions
- 📝 RSVP form with validation
- ☁️ RSVP submissions stored in Supabase
- 🔐 Password-protected admin dashboard
- 📊 Statistics dashboard
- 🗑 Delete guests from the admin panel
- ♻️ Fully reusable architecture

---

# Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Motion (animations)
- React Hook Form
- Zod
- Supabase

---

# Project Structure

```
app/
    admin/
    api/
    page.tsx

components/
    Hero.tsx
    Story.tsx
    WeddingDetails.tsx
    FAQ.tsx
    RSVP/
    layout/
    ui/

data/
    wedding.ts

lib/
    supabase.ts

public/
    ...
```

---

# Reusability

The project has been intentionally designed so it can be reused for any wedding.

Almost all editable content lives inside:

```
data/wedding.ts
```

To create a new wedding website, most of the time you only need to edit this file.

It contains information such as:

- Couple names
- Wedding date
- Hero text
- Story
- Ceremony
- Celebration
- Dress code
- FAQ
- Images
- etc.

No React components need to be modified for normal content changes.

---

# Images

Images are stored inside the **public/** folder.

Current naming convention:

```
flower.png
wedding.png
red-carpet.png
wedding-dress.png

partner-photo-1.jpg
partner-photo-2.jpg
partner-photo-3.jpg
```

These filenames are referenced throughout the components.

For future weddings it is recommended to simply replace the images while keeping the same filenames.

This avoids touching any code.

---

# Editing the Wedding

All editable information lives inside:

```
data/wedding.ts
```

Example:

```ts
couple: {
    partner1: "Jesús",
    partner2: "Paula",
}

date: "11 September 2026"

heroText: "..."

story: "..."

ceremony: {
    venue: "...",
    address: "...",
    time: "...",
}

celebration: {
    venue: "...",
    address: "...",
    time: "...",
}

questions: [
    ...
]
```

Whenever possible, edit this file instead of modifying components.

---

# RSVP

Guests submit the RSVP form.

The frontend sends a POST request to:

```
POST /api/rsvp
```

The API validates and stores the information in Supabase.

Stored information includes:

- First name
- Last name
- Email
- Menu preference
- Food notes / allergies
- Bus usage
- Favourite drink
- Must-play song

---

# Database

Supabase is used as the database.

The application never talks directly to Supabase from the browser.

Architecture:

```
Browser
    ↓
Next.js API Route
    ↓
Supabase
```

This keeps the Service Role Key private.

---

# Admin Dashboard

The project includes an admin dashboard located at:

```
/admin
```

Features:

- View every RSVP
- Guest statistics
- Number of guests
- Vegetarian count
- Vegan count
- Bus count
- Delete guests

---

# Authentication

The admin area is protected using **HTTP Basic Authentication** through the Next.js proxy.

Access is controlled via two environment variables:

```
ADMIN_USERNAME
ADMIN_PASSWORD
```

Only authenticated users can access `/admin`.

---

# Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SUPABASE_URL=

SUPABASE_SERVICE_ROLE_KEY=

ADMIN_USERNAME=

ADMIN_PASSWORD=
```

When deploying (e.g. Vercel), these same variables must also be configured in the project's Environment Variables.

---

# API Routes

Current API endpoints:

```
POST /api/rsvp
```

Creates a new RSVP.

---

```
DELETE /api/guests/:id
```

Deletes a guest.

---

# Styling

The project uses:

- Tailwind CSS v4
- shadcn/ui components
- Custom typography
- Responsive layout
- Motion animations

Animations are intentionally subtle to create an elegant wedding experience.

---

# Future Improvements

Potential ideas:

- Export guests as CSV
- Search guests
- Filter by menu
- Filter by bus
- Email confirmation after RSVP
- Google Maps links
- Accommodation recommendations
- Photo gallery
- Countdown to the wedding
- Multi-language support
- Music playlist integration
- Wedding gift list
- Timeline of the day

---

# Philosophy

This project aims to be:

- Elegant
- Minimal
- Fast
- Responsive
- Easy to customise
- Easy to reuse
- Easy to deploy

The only files that should normally require editing for a new wedding are:

- `data/wedding.ts`
- Images inside `public/`
- Environment variables

Everything else should remain unchanged.
