/* Personal birthday copy. Gift is confirmed as toner and emulsion; no brand assumed. */
const BIRTHDAY_LETTER=[
  "亲爱的菌糠，生日快乐呀。",
  "如果你已经读到这里，那我们一定牵着手，走过了今晚的小镇，把照片一张张找回来，也把那间小屋的灯点亮了。",
  "想给你做这个小小的游戏，是因为我喜欢和你一起完成一件事的感觉。一起找线索，一起想办法，你等我一下，我再去接住你。最后回头看看，原来我们已经并肩走了这么远。能把生日里的这一小段时间留给我们，我就觉得很开心。",
  "我一直记得刚开始的初见，我被你的帅气吸引，再后来被你的三观吸引，逐渐逐渐的对你的爱越来越深。我总是可惜我们25号第一次单独约会时，因我的胆小，没能与你拍下第一张合照，连那天的照片都不多，但那天的记忆与心情却是最深刻的。因此每次和你出去玩的时候，我都很珍惜每张合照，都很想留下些照片纪念此刻。十一和你去北京，在北海公园琉璃阁前拍合照的那天真的很开心。现在再看那张照片，还是会想起站在你身边的感觉。想把它放进这间小屋，也是想把那些舍不得忘记的时刻，好好留在我们能看见的地方。",
  "我喜欢我们温温柔柔、黏黏糊糊的样子。想牵你的手，想挨着你坐，想把一点小事也讲给你听。看到好玩的东西会想和你分享，想到以后可以一起去的地方，也会忍不住先开心起来。和你靠在一起的时候，连普普通通的一会儿，都变得很值得喜欢。",
  "新的一岁，希望你有很多开心的日子，有想做的事，也有慢慢去实现它们的力气。累的时候就歇一歇，想撒娇的时候可以来找我，遇到什么小烦恼也可以讲给我听。我想陪着你，也想让你知道，在我这里，你可以放松一点，做你自己就很好。",
  "今晚的小镇有终点，我们的照片墙还有好多位置。以后想和你再拍很多张合照，去看看不同的风景，也把一起吃饭、一起散步、挨在一起发呆的日子慢慢过好。等照片越来越多，我们以后的小家也留一个照片墙的位置吧！",
  "谢谢你和我走完这段小小的路。你在身边这件事，本身就让我很开心。愿新的一岁，你收获的喜欢和快乐都多一点，也愿我能继续陪着你，给你很多很多拥抱。",
  "最后再认真说一遍：生日快乐，我最喜欢的人，陈骏康。今天想多抱你一会儿，明天也想，往后的好多天都想。"
];
const BIRTHDAY_SIGNATURE="—— 一直想黏着你的人 ♡ 肖艾";
albumGift=function(){cpFrame('还有一封信，想亲手交给你。','生日快乐，我最喜欢的人。',`<section class="album-gift birthday-finale"><div class="birthday-gift-intro"><div class="birthday-duo" role="img" aria-label="送给你的生日水乳，一瓶水，一瓶乳"><div class="birthday-bottle toner"><i></i><span>水<small>TONER</small></span></div><div class="birthday-bottle emulsion"><i></i><span>乳<small>EMULSION</small></span></div><span class="birthday-gift-ribbon">FOR YOU · WITH LOVE</span></div><div><div class="eyebrow">A LITTLE CARE, EVERY DAY</div><h2>一套水乳，<br>还有好多想对你说的话。</h2><p>送给新一岁的你，也送给我们以后的每一个平常日子。</p></div></div><article class="letter birthday-letter" aria-label="写给你的生日信"><div class="birthday-letter-heading"><span>TO MY FAVORITE PERSON</span><i>♡</i></div><h2>新的一岁，也一起。</h2>${BIRTHDAY_LETTER.map((p,i)=>`<p${i===0?' class="birthday-salutation"':''}>${cpEscape(p)}</p>`).join('')}<div class="birthday-signature">${cpEscape(BIRTHDAY_SIGNATURE)}</div><div class="birthday-paper-foot">这封信会留在小屋里，随时都可以回来再读。</div></article><p class="birthday-handoff">读到这里，就把现实里的水乳交给他，再抱一下吧。</p></section>`,cpButton('albumReturnHome','把信收好，回到我们的照片小屋 ♡','primary'));document.querySelector('#cpMessage').textContent='烟花会散，照片和这封信会留在这里。';document.querySelector('#albumReturnHome').onclick=render;window.scrollTo({top:0,behavior:'instant'})};
