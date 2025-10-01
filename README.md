
# Sammy Dabbas - Backend Engineer Portfolio

A professional portfolio website showcasing backend engineering expertise, built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Professional Design**: Clean, matte color scheme with modern UI/UX
- **Responsive Layout**: Optimized for all device sizes
- **Single Page Navigation**: Smooth transitions between sections
- **Interactive Elements**: Hover effects and animations
- **Fast Performance**: Built with Vite for optimal loading speeds

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Build Tool**: Vite
- **State Management**: React Query
- **Routing**: React Router DOM
- **Icons**: Lucide React

## 📦 Installation & Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Deployment

### GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages:

1. **Automatic Deployment** (Recommended):
   - Push your code to the `main` branch
   - GitHub Actions will automatically build and deploy to GitHub Pages
   - Your site will be available at `https://yourusername.github.io/your-repo-name/`

2. **Manual Deployment**:
   ```bash
   # Make the deploy script executable
   chmod +x deploy.sh
   
   # Run the deployment script
   ./deploy.sh
   ```

### Important Setup Steps:

1. **Update Repository Name**: 
   - Edit `vite.config.ts` and replace `/your-repo-name/` with your actual repository name
   - Example: If your repo is `portfolio`, change it to `/portfolio/`

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

3. **Configure Base Path**:
   - The `vite.config.ts` is already configured for GitHub Pages
   - Make sure to update the base path to match your repository name

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── index.css           # Global styles and design tokens
```

## 🎨 Design System

The project uses a professional color scheme with semantic tokens defined in `index.css`. All colors, spacing, and typography follow the design system for consistency and easy theming.

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Enhanced layout for medium screens
- **Desktop**: Full-featured experience for large screens

## 🔧 Configuration

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality and consistency
- **Tailwind CSS**: Utility-first styling
- **Vite**: Fast build tool and development server

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Sammy Dabbas**
- Email: dabbassammy@gmail.com
- LinkedIn: https://www.linkedin.com/in/sammy-dabbas-61a559309/
- GitHub: https://github.com/Sammy-Dabbas

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
