export function Loader() {
  let $loader = document.createElement('img')

  $loader.src = 'app/assets/three-dots.svg'
  $loader.alt = 'Loading...'
  $loader.classList.add('loader')

  return $loader
}