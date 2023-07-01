#SenseTracking

##Introducción
Se propone realizar una aplicación web para el trackeo de actividades. La aplicación se denomina SenseTracking, de la cual ya hay una versión mínima existente (https://crisarquimediano.github.io/Web/SenseTracking/main.html?firts-name=&last-name=&user=&email=&contrase%C3%B1a=) desarrollada por mí en diciembre del 2022.

Ahora se pretende retomar este proyecto, para reafirmar y adquirir conocimiento de desarrollo, testeo y gestión y así obtener un perfil de FullStack Developer. La idea principal es poder mostrar esta aplicación en funcionamiento y alojarla en mi portafolio.

Alcance
SenseTracking tendrá un sistema de registro e inicio de sesión (es decir, se podrá crear un usuario) y, cada usuario, dispondrá del trackeo de sus actividades. Esto es, podrá iniciar nuevas actividades, detenerlas, guardarlas y eliminarlas. Todas las actividades realizadas, las podrá ver en la pantalla principal (es decir, habrá persistencia de datos). En esta segunda versión entonces habrá registro y logueo de usuario y, a su vez, trackeo con persistencia del historial. La aplicación, además, está pensada para funcionar en tiempo real. Deberá mostrar el tiempo transcurrido y deberá permanecer aún si el usuario recarga la página o cierra sesión (se puede establecer un límite de tiempo para detener la actividad automáticamente).

En esta segunda versión no se podrá editar el historial ni tampoco podrán verse gráficos y estadísticas, aunque está pensado que se pueda en la versión 3.0. Para una versión 4.0 se piensa agregar a SenseTracking una sección Pomodoro y otra sección ToDo List.

Organización
Se establece como la fecha de inicio el día de la fecha (28/06/2023) y como fecha tentativa de finalización el 6/08/2023, consistiendo así el tiempo de vida del proyecto de cuarenta (40) días.

Se utilizará la metodología ágil Scrum y se contará con cuatro (4) sprints de diez (10) días de duración cada uno.

Se utilizará la aplicación Trello para el manejo de las cartas y el flujo de trabajo.
Notion como central de información y recursos, es decir, wiki.

Para medir el estado del proyecto, se utilizará un gráfico Burndown Chart. Un story point equivale a una hora.

Estimación   
La estimación se hará con Juicio de Experto, basándose en la reciente experiencia tenida con el proyecto final de la Tecnicatura.

Testeo y entrega de funcionalidades
Se considerará una funcionalidad como terminada luego de ser testeada. El testeo funcional se hará con Selenium.

Desarrollo

Se propone desarrollar con metodología TDD, tanto la parte lógica del frontend como todo el backend. La idea principal es aprender .NET Core y ASP.NET, utilizándolo en el backend, y complementar con React en el frontend, en tanto que para la base de datos se use PostgreSQL.

Producción

Se tiene pensado alojar la base de datos relacional en Render y la aplicación per se en Vercel. Si Vercel soporta bien el backend (o es posible) se alojará allí, de lo contrario se evaluarán alternativas, teniendo en cuenta como primera opción a Render. 

