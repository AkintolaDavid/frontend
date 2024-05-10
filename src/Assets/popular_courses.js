import p10_img from "./product_10.jpg";
import p11_img from "./product_11.jpg";
import p16_img from "./product_16.jpg";
import p19_img from "./product_19.jpg";
let popular_courses = [
  {
    id: 11,
    name: "Introduction to Health care",
    category: "health_care",
    image: p11_img,
    code: "HSC101",
    rating: "4.1(5k)",
  },
  {
    id: 10,
    name: "Introduction to Programming ",
    category: "engineering",
    image: p10_img,
    code: "CS415",
    rating: "3.9(7k)",
  },

  {
    id: 16,
    name: "General Chemistry",
    category: "science_tech",
    image: p16_img,
    code: "CHM211",
    rating: "4.3(1k)",
  },
  {
    id: 19,
    name: "Introduction to Psychology",
    category: "social_science",
    image: p19_img,
    code: "PSY121",
    rating: "4.6(3k)",
  },
];

export default popular_courses;
