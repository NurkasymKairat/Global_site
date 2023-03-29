import jQuery from "jquery";

const scrollByJq = (selector) => {


        let offsetS = 0;
        $('html, body').animate({
            scrollTop: $(selector).offset().top - offsetS
        }, 1000);
        return false; 
  

    
 
};

export default scrollByJq;