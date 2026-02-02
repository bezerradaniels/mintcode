# Assets Images Structure

## 📁 Folders Organization

### `/logos/`
- Logos de clientes e parceiros
- Logo da Mintcode
- Ícones de marcas

### `/projects/`
- Imagens dos projetos do portfolio
- Screenshots de sites
- Mockups de aplicações

### `/mockups/`
- Mockups de dispositivos (notebook, smartphone, tablet)
- Composições para apresentação
- Imagens de alta definição para carousel

### `/clients/`
- Fotos de clientes para depoimentos
- Avatares para seção de social proof

### `/team/`
- Fotos da equipe
- Headshots para seção sobre nós

### `/icons/`
- Ícones customizados
- Ilustrações vetoriais
- Assets gráficos pequenos

## 📝 Usage Examples

### Import images in components:
```tsx
import projectImage from '../assets/images/projects/project-name.jpg'
import clientLogo from '../assets/images/logos/client-logo.svg'
import teamPhoto from '../assets/images/team/member-name.jpg'
```

### Recommended formats:
- **Photos**: JPG, PNG, WebP
- **Logos**: SVG, PNG
- **Icons**: SVG

### File naming:
- Use kebab-case: `project-name.jpg`
- Be descriptive: `client-tech-store-logo.svg`
- Include size if needed: `mockup-hero-1920x1080.jpg`

## 🎯 Current Projects

Para o PortfolioCarouselSection, adicione as imagens em:
- `/mockups/` - Para os mockups de notebook + smartphone
- Atualize os imports em `PortfolioCarouselSection.tsx`

Exemplo:
```tsx
import project1Image from '../../assets/images/mockups/hazak-fit-mockup.jpg'
import project2Image from '../../assets/images/mockups/tech-store-mockup.jpg'
```
