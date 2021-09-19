import NewsApiService from './fetchEvents';
import { fetchEvs, renderTicketsGallery} from './fetchSearch';
import { refs } from './refs';
import { modalClose, modalOpen } from './modal';

// if (modalOpen) {
//     refs.moreAuthorBtn.addEventListener('click', onMoreButtonClick);
// }
// // refs.moreAuthorBtn.addEventListener('click', onMoreButtonClick);

// function onMoreButtonClick(e) {
//     // e.preventDefault();
//     modalClose();

//     const authorName = e.currentTarget.event.name;
//     const searchAuthor = new NewsApiService.getByKey(authorName)
//         .then(renderTicketsGallery()).catch(console.log(error));
    
//     // onSearchEvent(searchAuthor);
//     // renderTicketsGallery();
    
// }

document.addEventListener('click', function (e) {
    let id = e.target.id;
    if (id === 'modal__more-button') {
        modalClose();
    }
    const searchAuthor = new NewsApiService;
    searchAuthor.fetchEvents().then(events => events._embedded.events.filter((el) => {
        
        console.log(el._embedded.attractions[0].name);
        if (el.id === e.target.dataset.source) {
        //  console.log(el.id);

            renderTicketsGallery(el);
        
        }
    }));
    // console.log(events._embedded.events);
    // searchAuthor.getByKey(events.name)
    // console.log(object);
        // .then(renderTicketsGallery()).catch(console.log(error));
})
// modalOpen();
