export const brand = {
  name: 'Body Reset',
  byline: 'by Georgia',
  owner: 'Georgia Ashton',
  phone: '07486 308239',
  phoneHref: 'tel:+447486308239',
  bookingUrl: 'https://skin-deep.uk3.cliniko.com/bookings?utm_id=97758_v0_s00_e0_tv0#service',
  email: 'richardmarkdempsey@gmail.com',
  tagline: 'Injury and pain management for people who want to move well again.',
  location: 'Skin Deep, 196 Croston Road, Farington Moss, Leyland, PR26 6PP',
  mapQuery: 'Skin Deep, 196 Croston Road, Farington Moss, Leyland, PR26 6PP'
};

export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/bodyreset_bygeorgia/', short: 'IG' },
  { label: 'Facebook', href: 'https://www.facebook.com/bodyreset.bygeorgia', short: 'FB' },
];

// Appointment names, durations, and prices checked against Cliniko on 2026-09-05.
export const services = [
  {
    "title": "Body Reset Consultation",
    "summary": "A starting point to discuss your symptoms, goals, and next steps with Georgia.",
    "image": {
      "src": "/georgia-consultation.png",
      "alt": "Georgia reviewing a treatment plan with a patient"
    },
    "appointments": [
      {
        "title": "Body Reset Consultation",
        "duration": 60,
        "price": "£56.00"
      }
    ]
  },
  {
    "title": "Sports Therapy/ Rehab",
    "summary": "Support for injury recovery, movement, and strength, with a longer appointment available for new patients.",
    "image": {
      "src": "/georgia-consultation.png",
      "alt": "Georgia discussing rehabilitation with a patient"
    },
    "appointments": [
      {
        "title": "Sports Therapy/ Rehab - 30 min",
        "duration": 30,
        "price": "£39.00"
      },
      {
        "title": "Sports Therapy/ Rehab/ New patient - 60 min",
        "duration": 60,
        "price": "£56.00"
      }
    ]
  },
  {
    "title": "Sports Massage/ Deep Tissue Massage",
    "summary": "Hands-on massage appointments with a choice of three session lengths.",
    "image": {
      "src": "/georgia-treatment.png",
      "alt": "Georgia administering hands-on treatment"
    },
    "appointments": [
      {
        "title": "Sports Massage/ Deep Tissue Massage - 30 min",
        "duration": 30,
        "price": "£34.00"
      },
      {
        "title": "Sports Massage/ Deep Tissue Massage - 45 min",
        "duration": 45,
        "price": "£39.00"
      },
      {
        "title": "Sports Massage/ Deep Tissue Massage - 60 min",
        "duration": 60,
        "price": "£49.00"
      }
    ]
  },
  {
    "title": "Acupuncture Therapy",
    "summary": "Separate appointments for new and existing patients.",
    "image": {
      "src": "/georgia-acupuncture.png",
      "alt": "Georgia explaining acupuncture equipment"
    },
    "appointments": [
      {
        "title": "Acupuncture Therapy (Existing patient) - 45 min",
        "duration": 45,
        "price": "£51.00"
      },
      {
        "title": "Acupuncture Therapy/ New patient - 60 min",
        "duration": 60,
        "price": "£59.00"
      }
    ]
  },
  {
    "title": "Cupping Therapy",
    "summary": "Cupping appointments with a choice of 30 or 60 minutes.",
    "image": {
      "src": "/georgia-cupping-prep.png",
      "alt": "Georgia preparing dry cupping equipment"
    },
    "appointments": [
      {
        "title": "Cupping Therapy - 30 min",
        "duration": 30,
        "price": "£42.00"
      },
      {
        "title": "Cupping Therapy - 60 min",
        "duration": 60,
        "price": "£59.00"
      }
    ]
  }
];

export const caseStudies = [
  {
    title: 'Desk-Based Neck and Shoulder Pain',
    result: 'Reduced daily discomfort and restored easier head movement across four sessions.',
    plan: 'Massage, simple mobility drills, and workstation habit changes.'
  },
  {
    title: 'Runner With Calf Tightness',
    result: 'Returned to steady running with fewer flare-ups and a clearer warm-up routine.',
    plan: 'Soft tissue treatment, dry cupping, and progressive lower-leg loading.'
  },
  {
    title: 'Post-Injury Confidence Rebuild',
    result: 'Built strength and confidence for gym-based exercise after a period of pain.',
    plan: 'Assessment-led treatment plus a staged personal training plan.'
  }
];

export const faqs = [
  {
    question: 'Do I need to be injured to book?',
    answer: 'No. Many clients book for maintenance, training support, tension, or general movement confidence.'
  },
  {
    question: 'What should I wear?',
    answer: 'Wear comfortable clothing you can move in. Georgia will explain what is needed before treatment starts.'
  },
  {
    question: 'Can treatments be combined?',
    answer: 'Yes. Massage, acupuncture, dry cupping, and exercise planning can be combined when it suits your goal.'
  }
];
