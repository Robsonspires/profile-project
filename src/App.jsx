import React from "react";
import { Header } from "./components/header/Header";
import "./global.css";
import { Footer } from "./components/footer/Footer";
import { Profile } from "./components/profile/Profile";

export function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Profile
          avatar="https://randomuser.me/api/portraits/women/44.jpg"
          name="Anna Caroline Dias"
          bio="Desenvolverdora FullStack"
          phone="+5511987654321"
          email="ana.carol.dias@email.com"
          githubUrl="https://github.com/"
          linkedinUrl="https://linkedin.com/"
          instagramUrl="https://instagram.com/"
        />

        <Profile
          avatar="https://randomuser.me/api/portraits/men/32.jpg"
          name="João Paulo Souza"
          bio="Engenheiro Backend"
          phone="+5511987654322"
          email="joao.paulo.souza@email.com"
          githubUrl="https://github.com/"
          linkedinUrl="https://linkedin.com/"
          instagramUrl="https://instagram.com/"
          theme="male"
        />

        <Profile
          avatar="https://randomuser.me/api/portraits/women/55.jpg"
          name="Mariana Duarte"
          bio="Designer UI/UX"
          phone="+5511987654323"
          email="mariana.duarte@email.com"
          githubUrl="https://github.com/"
          linkedinUrl="https://linkedin.com/"
          instagramUrl="https://instagram.com/"
        />

        <Profile
          avatar="https://randomuser.me/api/portraits/men/65.jpg"
          name="Diego Gonçalves"
          bio="Desenvolvedor FrontEnd"
          phone="+5511987654324"
          email="diego.goncalves@email.com"
          githubUrl="https://github.com/"
          linkedinUrl="https://linkedin.com/"
          instagramUrl="https://instagram.com/"
          theme="male"
        />
        <Profile
          avatar="https://randomuser.me/api/portraits/women/15.jpg"
          name="Mariana Duarte"
          bio="Designer UI/UX"
          phone="+5511987654323"
          email="mariana.duarte@email.com"
          githubUrl="https://github.com/"
          linkedinUrl="https://linkedin.com/"
          instagramUrl="https://instagram.com/"
        />

        <Profile
          avatar="https://randomuser.me/api/portraits/men/15.jpg"
          name="Diego Gonçalves"
          bio="Desenvolvedor FrontEnd"
          phone="+5511987654324"
          email="diego.goncalves@email.com"
          githubUrl="https://github.com/"
          linkedinUrl="https://linkedin.com/"
          instagramUrl="https://instagram.com/"
          theme="male"
        />
      </div>
      <Footer />
    </>
  );
}
