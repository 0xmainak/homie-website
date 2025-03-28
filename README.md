# Homie Discord Bot Website

A modern, responsive website for the Homie Discord bot, built with Next.js and Tailwind CSS.

![Homie Discord Bot](https://via.placeholder.com/1200x600?text=Homie+Discord+Bot+Website)

## Features

- 🎨 **Modern UI/UX**: Clean, intuitive interface with dark mode support
- 🚀 **Responsive Design**: Fully responsive layout for all devices
- ⚡ **Performance Optimized**: Fast loading times with Next.js
- 🤖 **Bot Showcase**: Detailed information about the bot's capabilities
- 📚 **Command Documentation**: Comprehensive list of all bot commands
- 💾 **Easy Deployment**: Simple setup for Vercel, Netlify, or other platforms

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/homie-site.git
cd homie-site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
homie-site/
├── app/                # Next.js app directory (pages and routes)
├── components/         # Reusable UI components
├── hooks/              # Custom React hooks
├── public/             # Static assets
├── styles/             # Global styles
└── ...
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Lucide Icons](https://lucide.dev/) - SVG icon set

## Customization

### Changing Bot Information

Edit the content in the respective page files:
- General info: `app/about/page.tsx`
- Commands: `app/commands/page.tsx`
- Features: `app/features/page.tsx`
- Invite: `app/invite/page.tsx`

### Theme Customization

The theme is configured in `tailwind.config.js`. You can modify the colors and other design tokens there.


## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- All the open-source contributors whose libraries made this project possible
- The Discord developer community for inspiration and support
