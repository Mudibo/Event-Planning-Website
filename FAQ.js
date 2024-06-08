const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');

//Select all 'q' elements
for (let i = 0; i < q.length; i++) {
  //Add click event to all 'q' elements
  q[i].addEventListener('click', () => {
    /*Open the s element with the same 'i' as the clicked 'q' element*/
    a[i].classList.toggle('a-opened');
    /*Rotate the arr 'element' with the same 'i' as the clicked 'q' element*/
    arr[i].classList.toggle('arrow-rotated');
  });
}