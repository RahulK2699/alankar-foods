export const addMenu = (copymenus,menuList, exist) => {
  let menu = copymenus.find((x) => x.id === exist.id);
  menuList.push(menu)
  var dataArr = menuList.map((item) => {
    return [item.id, item];
  });
  var maparr = new Map(dataArr);
  var result = [...maparr.values()];
  return result
};

export const removeMenu = (menuList, exist) => {
  let menu = menuList.find((x) => x.id === exist.id);
  let index = menuList.indexOf(menu);
   menuList.splice(index, 1); 
  return menuList;
};

export const removeMain = (menuList, exist) => {
  let menu = menuList.find((x) => x.id === exist.id);
  let index = menuList.indexOf(menu);
   menuList.splice(index, 1); 
  return menuList;
};



