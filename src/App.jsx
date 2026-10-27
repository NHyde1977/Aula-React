
import { useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import CourseSection from './components/CourseSection';
import VideoPlayer from './components/VideoPlayer';
import Footer from './components/Footer';

import { categories } from './data/courses';

import './App.css';

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  function handleSelectCourse(course) {
    setSelectedCourse(course);
  }

  function handleCloseVideo() {
    setSelectedCourse(null);
  }

  return (
    <>
      <Header categories={categories} />

      <main id="home">
        <Hero />

        <div id="cursos">
          {categories.map((category) => (
            <CourseSection
              key={category.id}
              category={category}
              onSelect={handleSelectCourse}
            />
          ))}
        </div>
      </main>

      <Footer categories={categories} />

      <VideoPlayer
        course={selectedCourse}
        onClose={handleCloseVideo}
      />
    </>
  );
}

export default App;
