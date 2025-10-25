export default function useCopyToClipboardText(data) {
   return async (event) => {
      console.log(event.target.closest('button'));



      try {
         await navigator.clipboard.writeText(data);
         const span = document.createElement('span');
         span.innerHTML = 'copied';
         span.style.cssText = `
         padding: 10px;
         position: absolute;
         bottom: calc(100% + 10px);
         left: 50%;
         transform: translateX(-50%);
         color: #595959;
         border: 1px solid #595959;
         background-color: #141414;
         opacity: 0;
         transition: opacity 0.5s;
         `
         event.target.closest('button').prepend(span);
         requestAnimationFrame(() => { span.style.opacity = 1; })
         setTimeout(() => { span.style.opacity = 0; }, 1000)
         setTimeout(() => { span.remove() }, 1500)
      } catch (err) {
         console.error('Ошибка копирования: ', err);
      }
   }
};

