// main.js - פונקציות גלובליות עבור האתר
// כתוב בהערות בעברית כדי להסביר מה כל בלוק עושה

// טיפול במצב בהיר/כהה ושמירת העדפה ב-localStorage
(function(){
  const toggleBtns = document.querySelectorAll('#theme-toggle, #theme-toggle-about');
  const stored = localStorage.getItem('trailrun_theme');

  // אם המשתמש כבר בחר מצב בעבר - נשתמש בו
  if (stored === 'dark') {
    document.body.classList.add('dark');
    // עדכון אייקונים אם ישנו כפתור
    toggleBtns.forEach(b => b.innerHTML = '<i class="fas fa-sun"></i>');
  }

  // פונקציה לשנות מצב ולקבוע שמירת העדפה
  function toggleTheme(btn){
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('trailrun_theme', isDark ? 'dark' : 'light');
    btn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  }

  // חיבור האירוע לכל כפתור שקיים בדפים
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => toggleTheme(btn));
  });
})();

// גלילה רכה לעוגנים
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    // אם הקישור מפנה לעוגן פנימי, נעשה גלילה חלקה במקום קפיצה
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// הטמעה קלה של Formspree - טיפול בתוצאה בצד הלקוח
// אם תכניסי את ה- action בקובץ index.html ל-ENDPOINT של Formspree,
// הטופס ישלח והדף יטען תגובה רגילה. כאן ניתן גם לטפל בשליחה דרך fetch אם רוצים.
