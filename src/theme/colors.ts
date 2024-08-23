// ### Camel Color Palette

// #### Primary Colors
// - **Camel Brown**: `#C19A6B` (Main camel color)
// - **Sandy Beige**: `#F4A460` (A lighter camel tone)
// - **Desert Tan**: `#D2B48C` (A soft, muted tan)

// #### Secondary Colors
// - **Burnt Umber**: `#8B4513` (A darker, rich brown)
// - **Olive Green**: `#808000` (For contrast and variety)
// - **Terracotta**: `#E2725B` (A warm, earthy red)

// #### Neutral Colors
// - **Sandstone**: `#F5DEB3` (Light neutral beige)
// - **Taupe**: `#B38B6D` (Neutral grayish-brown)
// - **Ivory**: `#FFFFF0` (Very light and soft neutral)

// #### Accent Colors
// - **Copper**: `#B87333` (For highlighting elements)
// - **Ochre**: `#CC7722` (For subtle accents)

// #### Warning and Error Colors
// - **Warning Yellow**: `#FFD700` (Bright, noticeable yellow)
// - **Error Red**: `#D32F2F` (Clear and distinct red)

// #### Success and Info Colors
// - **Success Green**: `#388E3C` (A positive, earthy green)
// - **Info Blue**: `#1976D2` (A clear and calm blue)

// ### Usage

// - **Primary colors** can be used for the main interface elements, like headers, buttons, and backgrounds.
// - **Secondary colors** are ideal for complementary elements and accents that require attention.
// - **Neutral colors** are suitable for backgrounds, borders, and text, providing a clean and elegant look.
// - **Accent colors** can be used for highlighting special features or actions.
// - **Warning and error colors** should be used sparingly for alerts, warnings, and error messages.
// - **Success and info colors** can be applied to convey success messages or informative content.

export const colors = {
  primary: '#C19A6B',
  secondary: '#8B4513',
  accent: '#B87333',
  text: '#1d1f21',
  caption: '#444648',
  error: '#D32F2F',
  background: '#F5DEB3',
  card: 'rgba(25, 16, 21, 0.2)',
  border: 'rgba(25, 16, 21, 0.5)',
  overlay20: 'rgba(25, 16, 21, 0.2)',
  overlay50: 'rgba(25, 16, 21, 0.5)',
  overlay80: 'rgba(25, 16, 21, 0.8)',
  notification: '#cccccc',
  sandyBeige: '#F4A460',
  desertTan: '#D2B48C',
  oliveGreen: '#808000',
  terracotta: '#E2725B',
  sandstone: '#F5DEB3',
  taupe: '#B38B6D',
  ivory: '#FFFFF0',
  copper: '#B87333',
  ochre: '#CC7722',
  warningYellow: '#FFD700',
  successGreen: '#388E3C',
  infoBlue: '#1976D2',
};

export type Colors = typeof colors;
