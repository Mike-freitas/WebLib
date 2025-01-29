// Define the interface for CardData
interface CardData {
    id: number;
    title: string;
    description: string;
    link: string;
    image: string;
    previewUrl?: string;
  }
  
  // Cria um array de objetos CardData
  const cardsData: CardData[] = [
    {
      id: 1,
      title: "Learn",
      description: "Explore new topics and skills.",
      link: "/learn",
      image: "image1.jpg",
      previewUrl: "https://example.com/learn-preview",
    },
    {
      id: 2,
      title: "Build",
      description: "Bring your ideas to life with projects.",
      link: "/build",
      image: "image2.jpg",
      previewUrl: "https://example.com/build-preview",
    },
    {
      id: 3,
      title: "Connect",
      description: "Join a community of learners and creators.",
      link: "/connect",
      image: "image3.jpg",
      previewUrl: "https://example.com/connect-preview",
    },
  ];
  
  // Exporta a interface e o array de dados
  export { cardsData };