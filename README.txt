TrailRunIsrael - מדריך להתקנה והפעלה

קבצים בתיקייה:
- index.html
- about.html
- assets/css/style.css
- assets/js/main.js
- images/hero.jpg

איך מעלים ל-GitHub Pages:
1. צרי ריפוזיטורי חדש ב-GitHub (public).
2. גררי את כל התיקייה TrailRunIsrael לתוך הריפו והעלאה (upload).
3. בתפריט Settings -> Pages בחרי להפעיל Pages מהענף main והתקייה root (או /docs אם העדפת).
4. המתיני מספר דקות והאתר יתפרסם בכתובת: https://<your-username>.github.io/TrailRunIsrael/

Formspree - שהפעלת טופס צור קשר מבלי לחשוף מייל:
1. היכנסי ל-www.formspree.io ופתחי חשבון חינמי (או השתמשי בחשבון קיים).
2. צרי פרויקט חדש וקבלי endpoint מסוג: https://formspree.io/f/xxxxx
3. פתחי קובץ index.html והחליפי את הערך של attribute action בטופס:
   <form action="REPLACE_WITH_FORMSPREE_ENDPOINT" method="POST">
   לשם הדוגמה: <form action="https://formspree.io/f/xxxxx" method="POST">
4. שמרי ודחפי את השינוי ל-GitHub.

הערות פרטיות:
- את כתובת המייל שסיפקת שמור לך באופן פרטי כ-endpoint ב-Formspree. אל תכניסי כתובת מייל גלויה לקוד.
- אם תרצי שאכניס את ה-endpoint עבורך (את תעבירי אותו בפרטי), אוכל לעדכן את הקובץ וליצור גרסה סופית.

שדרוגים מומלצים:
- הוספת AOS (כבר כלול) לשיפור אנימציות.
- הוספת Google Analytics / GA4 למדידת מבקרים.
- הוספת תפריט burger לנייד.
- הוספת תמונות נוספות בתיקיית images והחלפת ה-hero.

אם תרצי — אני יכול:
- 1) לבצע עבורך את הכנסת ה-ENDPOINT ל-formspree (את תמסרי לי את ה-URL של formspree ולא את המייל).
- 2) לדחוף את הקבצים ישירות ל-GitHub (אם תתני גישה זמנית) — אפשרות זו דורשת שיתוף מידע רגיש ולכן מציע לעשות אותה ידנית או דרך הוראות מדויקות.
