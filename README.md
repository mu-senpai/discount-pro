# Discount PRO: A Coupon Collecting Application

**Discount PRO** is a user-friendly application designed to help users find and use discount coupons for popular e-commerce shops in Bangladesh. The platform collects coupons from various brands, enabling users to save money and enjoy discounts effortlessly.

## Purpose
To simplify the coupon-collecting process by providing a central platform where users can explore and use coupons efficiently. The app integrates authentication and user-friendly features to ensure a seamless experience.

## Live URL
[Discount PRO Live](https://discount-prp.web.app)

## Key Features
1. **Authentication**
   - Sign up and log in using email or Google account (via Firebase Authentication).
   - Private routes with secure access for logged-in users only.
2. **Coupon Management**
   - View brand details with ratings and coupons.
   - Copy coupon codes using `react-copy-to-clipboard` and get a success toast.
   - Navigate to brand shop links to use coupons.
3. **Brand Exploration**
   - Explore brands on sale with their coupons and categories.
   - View all brands in card format with search functionality.
4. **User Profile**
   - View and update user profile details including name and photo.
   - Personalize the experience with a custom cover background.
5. **Responsiveness**
   - Fully responsive design optimized for mobile, tablet, and desktop devices.
6. **Error Handling**
   - A custom 404 page for invalid routes with navigation back to the home page.
7. **Enhanced Experience**
   - Winter-themed design promoting local support.
   - Slider with static images and brand logos using `react-fast-marquee`.
   - Additional animations using `AOS` or `Animate.css`.
   - Password toggling for user convenience.

## NPM Packages Used
- `firebase`: For authentication and real-time data handling.
- `react-copy-to-clipboard`: To enable easy copying of coupon codes.
- `react-fast-marquee`: For smooth scrolling of brand logos.
- `aos`: For homepage animations.

## Deployment
- Hosted on Firebase ensuring seamless user experience on reloading routes.
- Configured Firebase environment keys securely using `.env` variables.

## Contribution
This project includes:
- **GitHub Commits:** Over 10 meaningful commits with descriptive messages.
- **Unique Design:** A creative winter-themed layout tailored for local users.
- **JSON Data:** Dynamically generated brand and coupon data for realistic functionality.

## Future Enhancements
- Additional animations.
- Improved error handling and email verification.

---

Developed by Abdulla Al Muhit with ❤️ to simplify your shopping experience.