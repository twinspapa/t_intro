function chk_page_id() {
  var page_hash = location.hash;

  if(page_hash == "" || page_hash == "#null" || page_hash == '#undefiend' || page_hash == '#') {
    return "home";
  } else {
    return page_hash.replace('#','');
  }
}

function chk_obj_el_index(obj_name, key_name, direction){
  var obj = obj_name,
      arry = Object.keys(obj),
      length = arry.length,
      key = key_name;

  for (var i = 0; i < length; i++) {
    var data = arry[i];

    if (! direction) {
      if(key == data && i == 0) {
        return [length-1, i, i+1];
      } else if (key == data && i == length-1) {
        return [i-1, i, 0];
      } else if (key == data) {
        return [i-1, i, i+1];
      }
    } else if (direction == 'prev') {
      if(key == data && i == 0) {
        return [length-2, length-1, i];
      } else if (key == data && i == 1) {
        return [length-1, i-1, i];
      } else if (key == data) {
        return [i-2, i-1, i];
      }
    } else if (direction == 'next') {
      if(key == data && i == length-1) {
        return [length-1, 0, 1];
      } else if (key == data && i == length-2) {
        return [length-2, length-1, 0];
      } else if (key == data) {
        return [i, i+1, i+2];
      }
    }
  }
}

function cate_load(obj_name, appen_div) {
  var obj = obj_name,
      arry = Object.keys(obj),
      length = arry.length,
      el = $(appen_div);

  for (var i = 0; i < length; i++) {
    $nav_1.append("<li id="+arry[i]+" class='swiper-slide'><a href='#"+arry[i]+"'>"+obj[arry[i]]+"</a></li>");
  }
}

function cnt_load(obj_name, key_name) {
  var arry = chk_obj_el_index(obj_name, key_name),
      prev_id = Object.keys(obj_name)[arry[0]],
      active_id = Object.keys(obj_name)[arry[1]],
      next_id = Object.keys(obj_name)[arry[2]];

      $body.attr('id', 'pid_'+ active_id);

      append_css(active_id);
      $cnt_list.eq(1).attr('data-id',active_id).load("./cnt/"+ active_id + ".html");
      append_script(active_id);
      append_css(prev_id);
      $cnt_list.eq(0).attr('data-id',prev_id).load("./cnt/"+ prev_id + ".html");
      append_script(prev_id);
      append_css(next_id);
      $cnt_list.eq(2).attr('data-id',next_id).load("./cnt/"+ next_id + ".html");
      append_script(next_id);
}
function append_css(id) {
  var link_el = document.createElement('link');
  link_el.rel="stylesheet";
  link_el.href="./res/css/"+ id +".css";

  document.head.appendChild(link_el);
}
function append_script(id) {
  var script_el = document.createElement('script');

  script_el.src="./res/js/"+ id +".js";
  script_el.charset="utf-8"
  document.body.appendChild(script_el);
}
