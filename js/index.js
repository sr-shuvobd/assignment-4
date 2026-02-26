//
let carentTab = "all";
// card 
let allCard = document.getElementById('all-card');
let interviewContainer = document.getElementById('interview-container')
let rejectendContainer = document.getElementById('rejectend-container')
// allContainer
let allContainer = document.getElementById('all-container');
// count 
let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
let avaiableState = document.getElementById('avaiable');
// empty card
let emptyCard = document.getElementById('empty-card');


// switchTab 
function switchTab(tab) {
  carentTab = tab;
  let tabs = ["all", "interview", "rejected"];

  for (let i of tabs) {
    let tabName = document.getElementById(i + "-btn");

    if (i === tab) {
      tabName.classList.add("btn-primary");
    } 
    else {
      tabName.classList.remove("btn-primary");
    }
  }

  emptyCard.classList.add('hidden');

  if(tab === 'all'){
    allCard.classList.remove('hidden');
    interviewContainer.classList.add('hidden');
    rejectendContainer.classList.add('hidden');

    if(allCard.children.length < 1){
      emptyCard.classList.remove('hidden');
    }
  }
  else if(tab === 'interview'){
    allCard.classList.add('hidden');
    interviewContainer.classList.remove('hidden');
    rejectendContainer.classList.add('hidden');
    if(interviewContainer.children.length < 1){
      emptyCard.classList.remove('hidden');
    }
  }
  else if(tab === 'rejected'){
    allCard.classList.add('hidden');
    interviewContainer.classList.add('hidden');
    rejectendContainer.classList.remove('hidden');
    if(rejectendContainer.children.length < 1){
      emptyCard.classList.remove('hidden');
    }
  }
  count();
}

// clickEvent 
allContainer.addEventListener('click',function(event){
    let clickEvent = event.target;
    let card = clickEvent.closest('.m-card');
    let parent = card.parentNode;
    let status = card.querySelector('.statusd')

    if(clickEvent.classList.contains("interview")){
        interviewContainer.append(card);
        status.innerText = 'Interview';
        count()
    }
    else if(clickEvent.classList.contains("rejected")){
       rejectendContainer.append(card);
       status.innerText = 'Rejected';
       count()
    }
    else if(clickEvent.closest(".deleted")){
        parent.removeChild(card);
        // console.log(parent)
        count()
    }
    
})

// count 
function count(){

  let counts = {
    all: allCard.children.length,
    interview : interviewContainer.children.length,
    rejected : rejectendContainer.children.length
  }

  totalCount.innerText = counts['all'];
  interviewCount.innerText = counts['interview'];
  rejectedCount.innerText = counts['rejected'];

  avaiableState.innerText = counts[carentTab];

  if(counts[carentTab] < 1){
    emptyCard.classList.remove('hidden');
  }
  else{
    emptyCard.classList.add('hidden');
  }
}
count()