var start_page_id= function() {
  var page_hash = location.hash;

  if(page_hash == "" || page_hash == "#null" || page_hash == '#undefiend' || page_hash == '#') {
    return "home";
  } else {
    return page_hash.replace('#','');
  }
}

var cate_index = function(key_value)  {
  for (var i = 0; i < cate_length; i++) {
    var data = Object.keys(user_cate)[i];

    if(key_value == data && i == 0) {
      return [cate_length-1, i, i+1];
    } else if (key_value == data && i == cate_length-1) {
      return [i-1, i, 0];
    } else if (key_value == data) {
      return [i-1, i, i+1];
    }
  }
}

var chk_append_index = function(key_value,direction_num) {
  var el_num1 = cate_index(key_value)[direction_num],
      el_id1 = Object.keys(user_cate)[el_num1];

  return cate_index(el_id1);
}

function cate_load() {
  for (var i = 0; i < cate_length; i++) {
    var data = Object.keys(user_cate)[i],
        data_name = user_cate[data];

    $nav_1.append("<li id="+data+" class='swiper-slide'><a href='#"+data+"'>"+data_name+"</a></li>");
  }
  depth_1.update();
  depth_1.slideTo(cate_index(start_page_id())[1]);
}

function cnt_load(load_cnt_id) {
  var cate_num = cate_index(load_cnt_id),
      prev_id = Object.keys(user_cate)[cate_num[0]],
      active_id = Object.keys(user_cate)[cate_num[1]],
      next_id = Object.keys(user_cate)[cate_num[2]];

      $body.attr('id', 'pid_'+ active_id);

      $cnt_list.eq(1).attr('data-id',active_id).load("./cnt/"+ active_id + ".html");
      $cnt_list.eq(0).attr('data-id',prev_id).load("./cnt/"+ prev_id + ".html");
      $cnt_list.eq(2).attr('data-id',next_id).load("./cnt/"+ next_id + ".html");
}
