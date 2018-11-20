let tmp = new Date();
tmp.setTime(0);
document.cookie = "counts=;expires="+tmp.toGMTString();
location.reload();