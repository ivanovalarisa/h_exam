"use strict";document.addEventListener("DOMContentLoaded",function(){getDataFromServer().then(function(){var e=JSON.parse(localStorage.getItem("dataSelectedObj"));displayProduct(e.collection,e.id),notAvailableStyle(),selectedSize(),defaultSelectedSize(),viewPhoto()})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW5TaW5nbGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldERhdGFGcm9tU2VydmVyIiwidGhlbiIsInNlbGVjdGVkU2l6ZSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWZhdWx0U2VsZWN0ZWRTaXplIiwib2JqIiwiY29sbGVjdGlvbiIsImlkIiwibm90QXZhaWxhYmxlU3R5bGUiLCJ2aWV3UGhvdG8iXSwibWFwcGluZ3MiOiJBQUFBLGFBRUFBLFNBQVNDLGlCQUFpQixtQkFBb0IsV0FhdENDLG9CQUFBQyxLQUFBLFdBT0FDLElBQUFBLEVBQVlDLEtBQUFDLE1BQUFDLGFBQUFDLFFBQUEsb0JBQ1pDLGVBQW1CQyxFQUFBQyxXQUFBRCxFQUFBRSxJQVZ2QkMsb0JBWEpULGVBcUJRSyxzQkFDQUsiLCJmaWxlIjoibWFpblNpbmdsZVByb2R1Y3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gZnVuY3Rpb24gYWRkZWRQcm9kdWN0KCkge1xyXG4gICAgLy8gICAgIG5vdEFkZFRvQ2FydCgpO1xyXG4gICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtY2FydCcpLmlubmVySFRNTCA9ICdhZGRlZCc7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy9cclxuICAgIC8vXHJcbiAgICAvLyBhZGRlZFByb2R1Y3QoKTtcclxuXHJcblxyXG4gICAgZ2V0RGF0YUZyb21TZXJ2ZXIoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyBsZXQgaWQgPSAnMzMzJztcclxuICAgICAgICAvLyBsZXQgY29sbGVjdGlvbiA9ICdtZW4nO1xyXG5cclxuICAgICAgICAvLyBkaXNwbGF5UHJvZHVjdChjb2xsZWN0aW9uLCBpZCk7XHJcbiAgICAgICAgbGV0IG9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGFTZWxlY3RlZE9iaicpKTtcclxuICAgICAgICBkaXNwbGF5UHJvZHVjdChvYmouY29sbGVjdGlvbiwgb2JqLmlkKTtcclxuXHJcbiAgICAgICAgbm90QXZhaWxhYmxlU3R5bGUoKTtcclxuICAgICAgICBzZWxlY3RlZFNpemUoKTtcclxuICAgICAgICBkZWZhdWx0U2VsZWN0ZWRTaXplKCk7XHJcbiAgICAgICAgdmlld1Bob3RvKCk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdfQ==