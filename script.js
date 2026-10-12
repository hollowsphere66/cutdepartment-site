// Fill in confirmed social URLs below. Unconfigured links stay hidden.
const SOCIAL_LINKS = {
  instagram: '', // e.g. 'https://www.instagram.com/YOUR_HANDLE/'
  tiktok: '',    // e.g. 'https://www.tiktok.com/@YOUR_HANDLE'
  youtube: ''    // e.g. 'https://www.youtube.com/@YOUR_HANDLE'
};
for(const [name,url] of Object.entries(SOCIAL_LINKS)){
  if(!url)continue;
  document.querySelectorAll(`[data-social="${name}"]`).forEach(a=>{
    a.href=url;a.removeAttribute('aria-disabled');a.removeAttribute('title');a.target='_blank';a.rel='noopener noreferrer';
  });
}
const dialog=document.querySelector('#info-dialog');
const content=document.querySelector('#dialog-content');
const panels={
  contact:`<h2 id="dialog-title">Contact</h2><p>For inquiries, get in touch at <a href="mailto:hello@cutdepartment.com">hello@cutdepartment.com</a>.</p>`
};
document.querySelectorAll('[data-panel]').forEach(button=>button.addEventListener('click',()=>{content.innerHTML=panels[button.dataset.panel];dialog.showModal()}));
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
