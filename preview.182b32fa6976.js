(function(){
if(new URLSearchParams(location.search).get('preview')!=='1')return;
/* TEMPORARY desktop review controls. Remove this script tag for the final birthday release. */
const previewButton=document.createElement('button');previewButton.id='desktopPreviewNext';previewButton.innerHTML='<small>电脑测试 · 临时入口</small><span>预览下一幕 →</span>';previewButton.title='跳过当前小场景或双人操作，仅供当前测试阶段使用';document.body.append(previewButton);
function previewMount(){document.querySelector('#skip').hidden=true;const modal=document.querySelector('dialog[open]');const host=modal||document.body;if(previewButton.parentNode!==host)host.append(previewButton);previewButton.hidden=false}
function previewAdvance(){
 const modal=document.querySelector('dialog[open]');if(modal){if(modal.classList.contains('album-fireworks')){if(!albumIgnited){for(const key of ['a','b'])modal.querySelector(`[data-fire-key="${key}"]`).dispatchEvent(new KeyboardEvent('keydown',{code:'Enter',bubbles:true,cancelable:true}));for(const key of ['a','b'])modal.querySelector(`[data-fire-key="${key}"]`).dispatchEvent(new KeyboardEvent('keyup',{code:'Enter',bubbles:true}));}else modal.querySelector('#albumFireGift').click()}else modal.close();return}
 if(document.querySelector('#rewardOpen')&&!document.querySelector('#rewardOpen').hidden){document.querySelector('#rewardOpen').click();return}if(document.querySelector('#albumKeep')){document.querySelector('#albumKeep').click();return}
 if(document.querySelector('.album-gift')){render();return}
 cpStop();
 if(memory.active){if(memory.step===0){memory.clues=new Set(memoryClues.map(c=>c.id));memory.step=1}else if(memory.step===1){memory.order=[0,1,2,3,4,5];memory.step=2}else if(memory.step===2){for(const id of ['girl','boy'])memory.poses[id].ready=true;memory.step=3}else{collectMemory();return}render();return}
 if(campaign.active==='map'){const node=CP_NODES.find(n=>!campaign.done.includes(n[0])&&cpUnlocked(n[0]));cpStart(node?node[0]:'home');return}
 if(campaign.active==='market'){const m=campaign.market;if(m.done.length===3){cpFinish('market');return}if(m.stall===null){m.stall=[0,1,2].find(i=>!m.done.includes(i));render()}else marketDone(m.stall);return}
 if(campaign.active==='greenhouse'){const g=campaign.green;if(g.phase<2)g.rotations[g.phase]=[...CP_PIPES[g.phase].solution];else if(g.phase===2)g.colors=[2,0,1];else if(g.phase===3)g.harvest=6;else{cpFinish('greenhouse');return}g.phase++;render();return}
 if(campaign.active==='post'){const p=campaign.post;if(p.lock===0)p.code='341';else if(p.lock===1)p.route=[...CP_ROUTE];else if(p.lock===2)p.stamps=[3,0,1,2];else{cpFinish('post');return}p.lock++;render();return}
 if(campaign.active==='roof'){if(campaign.roof.length<6){campaign.roof=[0,1,2,3,4,5];render()}else cpMap();return}
 if(stage===0){stage=1;render();return}
 if(stage===1){if(!met){met=true;meetingPositions={boy:{x:575,y:280},girl:{x:630,y:280}};render()}else{handInHand=true;worldAwake=true;cpMap()}return}
 if(stage===2){if(!puzzleDone()){puzzle.boxes=targets.map(p=>[...p]);render()}else{campaign.waterPhase=3;stage=3;render()}return}
 if(stage===3){if(!wind.every((n,i)=>n===windGoal[i])){wind=[...windGoal];render()}else cpFinish('water');return}
 if(stage===4){if(!joined){joined=true;render()}else if(coopPhase<3){coopPhase++;coopAmount=0;bridge=coopPhase>=2;render()}else{opened=true;stage=5;campaign.started=true;campaign.route='bridge';render()}return}
 if(stage===5){const a=albumState(),owned=albumOwned();if(!owned.every(p=>a.hung.includes(p.id))){a.hung=owned.map(p=>p.id);cpSave();render()}else if(owned.length===5)albumFireworks();else cpMap()}
}
previewButton.onclick=previewAdvance;
const previewObserver=new MutationObserver(previewMount);previewObserver.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['open']});previewMount();

})();
