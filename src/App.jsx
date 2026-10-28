
import { useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import CourseSection from './components/CourseSection';
import VideoPlayer from './components/VideoPlayer';
import Footer from './components/Footer';

import { categories } from './data/courses';

import './App.css';

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);

  function handleSelectCourse(course) {
    setSelectedCourse(course);
  }

  function handleCloseVideo() {
    setSelectedCourse(null);
  }

  function handleToggleFavorite(courseId) {
    setFavorites((currentFavorites) => {
      if (currentFavorites.includes(courseId)) {
        return currentFavorites.filter(
          (id) => id !== courseId
        );
      }

      return [...currentFavorites, courseId];
    });
  }

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      courses: category.courses.filter((course) =>
        course.title
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase())
      )
    }))
    .filter((category) => category.courses.length > 0);

  const favoriteCourses = categories.flatMap(
    (category) => category.courses
  ).filter((course) => favorites.includes(course.id));

  const favoriteCategory = {
    id: 'minha-lista',
    title: 'Minha Lista',
    courses: favoriteCourses
  };

  return (
    <>
      <Header categories={categories} />

      <main id="home">
        <Hero />

        <div id="cursos">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <CourseSection
                key={category.id}
                category={category}
                onSelect={handleSelectCourse}
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
              />
            ))
          ) : (
            <p className="no-results">
              Nenhum curso encontrado.
            </p>
          )}
        </div>

        <section id="favoritos">
          {favoriteCourses.length > 0 ? (
            <CourseSection
              category={favoriteCategory}
              onSelect={handleSelectCourse}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
            />
          ) : (
            <div className="empty-favorites">
              <h2>Minha Lista</h2>
              <p>
                Você ainda não adicionou cursos aos favoritos.
              </p>
            </div>
          )}
        </section>
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
