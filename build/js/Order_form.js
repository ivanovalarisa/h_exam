"use strict";function getStringObjAndPars(){var e=localStorage.getItem("dataCart");showOrderTab(JSON.parse(e))}function showOrderTab(e){var t,n=document.getElementById("orderTab"),a=document.createElement("div");a.setAttribute("class","order_box"),a.insertAdjacentHTML("afterbegin",'\n                          <h2>Your Order</h2>\n                          <ul class="list">\n                              '.concat((t=' <table class="table table-sm">\n                          <thead>\n                            <tr>\n                              <th scope="col">Name</th>\n                              <th scope="col">Size</th>\n                              <th scope="col">Price</th>\n                              <th scope="col">Count</th>\n                            </tr>\n                          </thead>\n                          <tbody>',e.forEach(function(e){t+="<tr>\n                          <td>".concat(e.name,"</td>\n                          <td>").concat(e.size,"</td>\n                          <td>").concat(e.price,"</td>\n                          <td>").concat(e.quantity,"</td>\n                        </tr>")}),t+=" </tbody></table>"),'\n                          </ul>\n                          <ul class="list `list_2`">\n                          ').concat(orderHeard(e),'\n                          </ul>\n                          <div id="checkLine" class="last">Check if all fields are entered correctly</div>\n                          <div class="text-center">\n                              <a id="btnConfirm" class="button button-paypal" href="#">Confirm</a>\n                          </div>\n                            ')),n.appendChild(a),showOrderFormInput(e)}function orderHeard(e){var a=0;return e.forEach(function(e){var t=Number.parseInt(e.price),n=Number.parseInt(e.quantity);a+=n*t,0}),'<li><a href="#">Subtotal <span>$'.concat(a.toFixed(2),'</span></a></li>\n                <li><a href="#">Shipping <span>$').concat((0).toFixed(2),'</span></a></li>\n                <li><a href="#">Total <span>$').concat((a+0).toFixed(2),"</span></a></li>")}function showOrderFormInput(v){var p={2:"Kiev",3:"Kharkov",4:"Odessa",5:"Lugansk",6:"Donetsk",7:"Krivoy Rog",8:"Nikolaev"};function b(e,t){return e?t.classList.remove("errorTextInvisible"):t.classList.add("errorTextInvisible"),!e}document.getElementById("btnConfirm").addEventListener("click",function(){var e=!0,t=document.forms.orderForm,n=t.elements.firstName.value,a=document.getElementById("errorTextFirstName");b(null===n.match(/^['A-Za-z\u0410-\u044F]['\x2DA-Za-z\u0410-\u044F]+['A-Za-z\u0410-\u044F]?$/),a)||(e=!1);var o=t.elements.lastName.value,r=document.getElementById("errorTextLastName");b(null===o.match(/^['A-Za-z\u0410-\u044F]['\x2DA-Za-z\u0410-\u044F]+['A-Za-z\u0410-\u044F]?$/),r)||(e=!1);var c=t.elements.number.value,s=document.getElementById("errorTextPhoneNumber");b(null===c.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/),s)||(e=!1);var l=t.elements.email.value,d=document.getElementById("errorTextEmail");b(null===l.match(/^\w{1,20}[@]?[a-z]{1,6}[.]?[a-z]{1,5}$/),d)||(e=!1);var i=t.elements.citySelect.value;console.log(i),b("1"===i,document.getElementById("errorTextCity"))||(e=!1);var u=p[i];console.log(u);var m=t.elements.newPostOffice.value,h=document.getElementById("errorTextPostOffice");b(null===m.match(/[№]?[0-9]{1,4}/g),h)||(e=!1);t.elements.message.value;showOrderResult(n,o,c,l,u,m,v,e)})}function showOrderResult(e,t,n,a,o,r,c,s){if(s){var l=document.getElementById("orderResult"),d=document.getElementById("orderNumber"),i=$("#resultModal").on("hidden.bs.modal",function(){localStorage.removeItem("dataCart"),document.location.href="/"});d.innerText="12345";var u='<h5>Сustomer information: </h5>\n                        <div class="col-"> <span class="captionOrderResult">First name: </span> '.concat(e,'</div>\n                        <div class="col-"> <span class="captionOrderResult">Last name: </span>').concat(t,'</div>\n                        <div class="col-"> <span class="captionOrderResult">Phone: </span>').concat(n,'</div>\n                        <div class="col-"> <span class="captionOrderResult">mail: </span>').concat(a,'</div>\n                        <div class="col-"> <span class="captionOrderResult">City: </span>').concat(o,'</div>\n                        <div class="col-"> <span class="captionOrderResult">Post number: </span>').concat(r,'</div>\n                        <div class="col-"> </div>\n                        <div class="col-"> <table class="table table-sm">\n                          <thead>\n                            <tr>\n                              <th scope="col">Name</th>\n                              <th scope="col">Collection</th>\n                              <th scope="col">Size</th>\n                              <th scope="col">Price</th>\n                              <th scope="col">Count</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                          <h5 class="headlineOrderResult">Product information: </h5>');c.forEach(function(e){u+='\n                        <tr>\n                          <th scope="row">'.concat(e.name,"</th>\n                          <td>").concat(e.collection,"</td>\n                          <td>").concat(e.size,"</td>\n                          <td>").concat(e.price,"</td>\n                          <td>").concat(e.quantity,"</td>\n                        </tr>")}),u+='</tbody></table></div>\n                    <ul class="list `list_2`">\n                         '.concat(orderHeard(c),'\n                    </ul>\n                    <div class="col-">Our manager will phone you as soon as possible. Best regards</div>'),l.innerHTML=u,i.modal("show")}}getStringObjAndPars();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk9yZGVyX2Zvcm0uanMiXSwibmFtZXMiOlsiZ2V0U3RyaW5nT2JqQW5kUGFycyIsIml0ZW1zSnNvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzaG93T3JkZXJUYWIiLCJpdGVtc09iaiIsImh0bWwiLCJvcmRlclRhYldyYXBwZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib3JkZXJCb3giLCJjcmVhdGVFbGVtZW50IiwiY29uY2F0IiwiZm9yRWFjaCIsIml0ZW0iLCJuYW1lIiwic2l6ZSIsInByaWNlIiwicXVhbnRpdHkiLCJvcmRlckhlYXJkIiwiYXBwZW5kQ2hpbGQiLCJmaXJzdE5hbWUiLCJvcmRlckZvcm0iLCJ0b3RhbFByaWNlIiwidmFsaWRhdGVGb3JtT3JkZXIiLCJpdGVtcyIsInByaWNlQXNOdW1iZXIiLCJOdW1iZXIiLCJwYXJzZUludCIsImxhc3ROYW1lIiwiZWxlbWVudHMiLCJ2YWx1ZSIsInF1YW50aXR5QXNOdW1iZXIiLCJ0b0ZpeGVkIiwiaXNGb3JtQ29ycmVjdCIsImNpdHlNYXRjaGVzIiwiZW1haWwiLCJkaXZXaXRoVmFsaWRhdGVUZXh0RW1haWwiLCI0IiwiNSIsIjciLCI4IiwiY29uZGl0aW9uIiwiZGl2V2l0aFZhbGlkYXRlVGV4dCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImRpdldpdGhWYWxpZGF0ZVRleHRDaXR5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvcm1zIiwiZGl2V2l0aFZhbGlkYXRlVGV4dEZpcnN0IiwiY29ycmVjdE5hbWVDaXR5IiwiY2l0eSIsImxvZyIsInBvc3RPZmZpY2UiLCJtYXRjaCIsImRpdldpdGhWYWxpZGF0ZVRleHRMYXN0IiwiY29tbWVudCIsInBob25lTnVtYmVyIiwibnVtYmVyIiwic2hvd09yZGVyUmVzdWx0Iiwib3JkZXJOdW1iZXIiLCJyZXN1bHRNb2RlbCIsIm5ld1Bvc3RPZmZpY2UiLCJkaXZXaXRoVmFsaWRhdGVUZXh0TmV3UG9zdE9mZmljZSIsIm9yZGVyUmVzdWx0IiwibWVzc2FnZSIsIiQiLCJvbiIsInJlbW92ZUl0ZW0iLCJsb2NhdGlvbiIsImhyZWYiLCJpbm5lclRleHQiLCJjb2xsZWN0aW9uIiwiaW5uZXJIVE1MIiwibW9kYWwiXSwibWFwcGluZ3MiOiJhQUFBQSxTQUFBQSxzQkFHSSxJQUFJQyxFQUFZQyxhQUFhQyxRQUFRLFlBQXJDQyxhQURLSixLQUFBQSxNQUFUQyxJQUlDLFNBQUFHLGFBQUFDLEdBR0csSUFtQlFDLEVBbkJKQyxFQUFrQkMsU0FBU0MsZUFBZSxZQURsREMsRUFBU04sU0FBYUMsY0FBVSxPQUM1QkssRUFBSUgsYUFBa0JDLFFBQVNDLGFBQy9CQyxFQUFJQSxtQkFBb0JDLGFBQXhCLCtIQUFBQyxRQWtCUU4sRUFBSSx1YkFIWkQsRUEyQ0FRLFFBQUEsU0FBQUMsR0FHSFIsR0FBQSx1Q0FBQU0sT0E5QitCRSxFQUFLQyxLQThCcEMseUNBQUFILE9BRTJCUCxFQUE1QlcsS0FGQyx5Q0FBQUosT0FJdUJFLEVBQUFHLE1BSnZCLHlDQUFBTCxPQUl1QkUsRUFBQUksU0FKdkIsMENBUU9aLEdBQUsscUJBckVULHVIQUFBTSxPQWtCWU8sV0FBQWQsR0FsQlosMldBZUFFLEVBQWdCYSxZQUFZVixHQTRENUJGLG1CQUFTQyxHQUlMLFNBQUlZLFdBQVlDLEdBQ2hCLElBQ0lDLEVBQUNDLEVBdkJULE9BMEJLQyxFQUFBWixRQUFBLFNBQUFDLEdBakNELElBQUlZLEVBQWdCQyxPQUFPQyxTQUFTZCxFQUFLRyxPQW1DckNZLEVBQXFCQyxPQUFTRCxTQUFTRSxFQUEzQ2IsVUFoQ0FLLEdBQTRCUyxFQUFtQk4sRUFrQzNDVCxJQTlCUixtQ0FBQUwsT0FBMENXLEVBQVdVLFFBQVEsR0FBN0Qsc0VBQUFyQixRQVhXLEdBOENQcUIsUUFBQSxHQW5DSixtRUFBQXJCLFFBb0M2Q0gsRUEvQ2xDLEdBK0NpRHdCLFFBQUEsR0FwQzVELG9CQXVDUUMsU0FBQUEsbUJBQUE3QixHQWhDUixJQUFNOEIsRUFBYyxDQW9DWkMsRUFBSyxPQUNMQyxFQUFBQSxVQWxDSkMsRUFBSyxTQW1DREMsRUFBQ2YsVUFFRFUsRUFBQUEsVUFDSE0sRUFBQSxhQWxDREMsRUFBSyxZQXlEVCxTQUFTakIsRUFBa0JrQixFQUFXQyxHQU9sQyxPQU5JRCxFQUNBQyxFQUFvQkMsVUFBVUMsT0FBTyxzQkFFckNGLEVBQW9CQyxVQUFVRSxJQUFJLHVCQUc5QkosRUExQlJsQyxTQUFJdUMsZUFBQUEsY0FBa0NDLGlCQUFnQixRQUFBLFdBbEN0RCxJQUFJZCxHQUFnQixFQW1DZlYsRUFBQUEsU0FBc0J5QixNQUFMM0IsVUFFckJELEVBQUFDLEVBQUFRLFNBQUFULFVBQUFVLE1BakNHbUIsRUFBMkIxQyxTQUFTQyxlQUFlLHNCQWtDakQwQyxFQUFOLE9BQXdCaEIsRUFBWWlCLE1BQXBDLDhFQUNRQyxLQUVKQyxHQUFhaEMsR0FFYixJQUFDRSxFQUFBQSxFQUFrQjhCLFNBQVdDLFNBQU14QixNQUNwQ0csRUFBQTFCLFNBQUFDLGVBQUEscUJBQ0hlLEVBQUEsT0FBQUssRUFBQTBCLE1BQUEsOEVBaENHQyxLQWtDQUMsR0FBb0IzQixHQTlCeEIsSUFBSTRCLEVBQWNwQyxFQUFVUSxTQUFTNkIsT0FBTzVCLE1Bb0N2Q1AsRUFBNkJtQixTQUFBQSxlQUFxQix3QkFDbkRELEVBQVcsT0FBQWdCLEVBQUFILE1BQUEsdURBQ1haLEtBQ0dULEdBQUEsR0FJUCxJQUFRUSxFQUFBQSxFQUFSWixTQUFBTSxNQUFBTCxNQUNITSxFQUFBN0IsU0FBQUMsZUFBQSxrQkFFSmUsRUFBQSxPQUFBWSxFQUFBbUIsTUFBQSwwQ0FuQ1dsQixLQXFDSHVCLEdBQWdCdkMsR0FHYndDLElBQUFBLEVBQVd2QyxFQUFHZCxTQUFTQyxXQUFlc0IsTUFDdEMrQixRQUFBQSxJQUFXVixHQUVYNUMsRUFBQSxNQUF1QjRDLEVBREM1QyxTQUF4QkMsZUFBQSxvQkFESnlCLEdBQUEsR0FPSTVCLElBQUk2QyxFQUFBaEIsRUFBQWlCLEdBcUJSL0MsUUFBU1EsSUFBVHNDLEdBQUEsSUFBQUcsRUFBQWhDLEVBQUFRLFNBQUFpQyxjQUFBaEMsTUFZSWlDLEVBQUF4RCxTQUFBQyxlQUFBLHVCQUtKd0QsRUFBQSxPQUF3QjNELEVBQXhCaUQsTUFBQSxtQkFBQVMsS0FDQUYsR0FBQSxHQXBFY3hDLEVBQVVRLFNBQVNvQyxRQUFRbkMsTUFFekM2QixnQkFBZ0J2QyxFQUFVUSxFQUFTNkIsRUFBWXRCLEVBQU1lLEVBQWdCRyxFQUFXakQsRUFBUzZCLEtBZ0JqRyxTQUFTMEIsZ0JBQWdCdkMsRUFBVVEsRUFBUzZCLEVBQVl0QixFQUFNZSxFQUFnQkcsRUFBV2pELEVBQVM2QixHQUM5RixHQUFJQSxFQUFlLENBQ2YsSUFBSStCLEVBQWN6RCxTQUFTQyxlQUFlLGVBQ3RDb0QsRUFBY3JELFNBQVNDLGVBQWUsZUFDdENxRCxFQUFjSyxFQUFFLGdCQUFnQkMsR0FBRyxrQkFBa0IsV0FDckRsRSxhQUFhbUUsV0FBVyxZQUN4QjdELFNBQVM4RCxTQUFTQyxLQUFLLE1BRzNCVixFQUFZVyxVQUFZLFFBRXhCLElBQUlsRSxFQUFJLG9JQUFBTSxPQUNrRlMsRUFEbEYsMEdBQUFULE9BRWdGaUIsRUFGaEYsc0dBQUFqQixPQUc0RThDLEVBSDVFLHFHQUFBOUMsT0FJMkV3QixFQUozRSxxR0FBQXhCLE9BSzJFdUMsRUFMM0UsNEdBQUF2QyxPQU1rRjBDLEVBTmxGLGtyQkFxQlJqRCxFQUFTUSxRQUFRLFNBQUFDLEdBQ2JSLEdBQUksNkVBQUFNLE9BRTRCRSxFQUFLQyxLQUZqQyx5Q0FBQUgsT0FHZ0JFLEVBQUsyRCxXQUhyQix5Q0FBQTdELE9BSWdCRSxFQUFLRSxLQUpyQix5Q0FBQUosT0FLZ0JFLEVBQUtHLE1BTHJCLHlDQUFBTCxPQU1nQkUsRUFBS0ksU0FOckIsMENBV1JaLEdBQUksb0dBQUFNLE9BRWVPLFdBQVdkLEdBRjFCLHlJQUtKNEQsRUFBWVMsVUFBWXBFLEVBQ3hCd0QsRUFBWWEsTUFBTSxTQXpNMUIzRSIsImZpbGUiOiJPcmRlcl9mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZ2V0U3RyaW5nT2JqQW5kUGFycygpO1xyXG5cclxuZnVuY3Rpb24gZ2V0U3RyaW5nT2JqQW5kUGFycygpIHtcclxuICAgIGxldCBpdGVtc0pzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0YUNhcnQnKTtcclxuICAgIGxldCBpdGVtc09iaiAgPUpTT04ucGFyc2UoaXRlbXNKc29uKTtcclxuICAgIHNob3dPcmRlclRhYihpdGVtc09iaik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dPcmRlclRhYihpdGVtc09iaikge1xyXG4gICAgbGV0IG9yZGVyVGFiV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmRlclRhYicpO1xyXG4gICAgbGV0IG9yZGVyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBvcmRlckJveC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29yZGVyX2JveCcpO1xyXG4gICAgb3JkZXJCb3guaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Zb3VyIE9yZGVyPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b3JkZXJJdGVtc0xpc3QoaXRlbXNPYmopfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdCBcXGBsaXN0XzJcXGBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAke29yZGVySGVhcmQoaXRlbXNPYmopfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNoZWNrTGluZVwiIGNsYXNzPVwibGFzdFwiPkNoZWNrIGlmIGFsbCBmaWVsZHMgYXJlIGVudGVyZWQgY29ycmVjdGx5PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGlkPVwiYnRuQ29uZmlybVwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1wYXlwYWxcIiBocmVmPVwiI1wiPkNvbmZpcm08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgKTtcclxuICAgIG9yZGVyVGFiV3JhcHBlci5hcHBlbmRDaGlsZChvcmRlckJveCk7XHJcblxyXG4gICAgZnVuY3Rpb24gb3JkZXJJdGVtc0xpc3QoaXRlbXMpIHtcclxuICAgICAgICBsZXQgaHRtbCA9IGAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TaXplPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Db3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PmBcclxuXHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaHRtbCArPSBgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2l0ZW0ubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2l0ZW0uc2l6ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2l0ZW0ucHJpY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtpdGVtLnF1YW50aXR5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+YDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGh0bWwgKz0gYCA8L3Rib2R5PjwvdGFibGU+YDtcclxuICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2hvd09yZGVyRm9ybUlucHV0KGl0ZW1zT2JqKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3JkZXJIZWFyZChpdGVtcykge1xyXG4gICAgbGV0IHByaWNlID0gMDtcclxuICAgIGxldCBzaGlwID0gMDtcclxuICAgIGxldCB0b3RhbFByaWNlID0gMDtcclxuXHJcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGxldCBwcmljZUFzTnVtYmVyID0gTnVtYmVyLnBhcnNlSW50KGl0ZW0ucHJpY2UpO1xyXG4gICAgICAgIGxldCBxdWFudGl0eUFzTnVtYmVyID0gTnVtYmVyLnBhcnNlSW50KGl0ZW0ucXVhbnRpdHkpO1xyXG5cclxuICAgICAgICB0b3RhbFByaWNlID0gdG90YWxQcmljZSArICggcXVhbnRpdHlBc051bWJlciAqIHByaWNlQXNOdW1iZXIgKTtcclxuICAgICAgICBwcmljZSA9IHByaWNlICsgcHJpY2VBc051bWJlcjtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGA8bGk+PGEgaHJlZj1cIiNcIj5TdWJ0b3RhbCA8c3Bhbj4kJHt0b3RhbFByaWNlLnRvRml4ZWQoMil9PC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U2hpcHBpbmcgPHNwYW4+JCR7c2hpcC50b0ZpeGVkKDIpfTwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlRvdGFsIDxzcGFuPiQkeyh0b3RhbFByaWNlICsgc2hpcCkudG9GaXhlZCgyKX08L3NwYW4+PC9hPjwvbGk+YDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd09yZGVyRm9ybUlucHV0KGl0ZW1zT2JqKSB7XHJcblxyXG4gICAgY29uc3QgY2l0eU1hdGNoZXMgPSB7XHJcbiAgICAgICAgJzInOiAnS2lldicsXHJcbiAgICAgICAgJzMnOiAnS2hhcmtvdicsXHJcbiAgICAgICAgJzQnOiAnT2Rlc3NhJyxcclxuICAgICAgICAnNSc6ICdMdWdhbnNrJyxcclxuICAgICAgICAnNic6ICdEb25ldHNrJyxcclxuICAgICAgICAnNyc6ICdLcml2b3kgUm9nJyxcclxuICAgICAgICAnOCc6ICdOaWtvbGFldidcclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkNvbmZpcm0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgaXNGb3JtQ29ycmVjdCA9IHRydWU7XHJcbiAgICAgICAgbGV0IG9yZGVyRm9ybSA9IGRvY3VtZW50LmZvcm1zLm9yZGVyRm9ybTtcclxuXHJcbiAgICAgICAgbGV0IGZpcnN0TmFtZSA9IG9yZGVyRm9ybS5lbGVtZW50cy5maXJzdE5hbWUudmFsdWU7XHJcbiAgICAgICAgbGV0IGRpdldpdGhWYWxpZGF0ZVRleHRGaXJzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvclRleHRGaXJzdE5hbWUnKTtcclxuICAgICAgICBpZiAoIXZhbGlkYXRlRm9ybU9yZGVyKGZpcnN0TmFtZS5tYXRjaCgvXlthLXpBLVrQsC3Rj9CQLdCvJ11bYS16QS1a0LAt0Y/QkC3Qry0nXStbYS16QS1a0LAt0Y/QkC3QryddPyQvdSkgPT09IG51bGwsXHJcbiAgICAgICAgICAgIGRpdldpdGhWYWxpZGF0ZVRleHRGaXJzdCkpIHtcclxuICAgICAgICAgICAgaXNGb3JtQ29ycmVjdCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxhc3ROYW1lID0gb3JkZXJGb3JtLmVsZW1lbnRzLmxhc3ROYW1lLnZhbHVlO1xyXG4gICAgICAgIGxldCBkaXZXaXRoVmFsaWRhdGVUZXh0TGFzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvclRleHRMYXN0TmFtZScpO1xyXG4gICAgICAgIGlmICghdmFsaWRhdGVGb3JtT3JkZXIobGFzdE5hbWUubWF0Y2goL15bYS16QS1a0LAt0Y/QkC3QryddW2EtekEtWtCwLdGP0JAt0K8tJ10rW2EtekEtWtCwLdGP0JAt0K8nXT8kL3UpID09PSBudWxsLFxyXG4gICAgICAgICAgICBkaXZXaXRoVmFsaWRhdGVUZXh0TGFzdCkpIHtcclxuICAgICAgICAgICAgaXNGb3JtQ29ycmVjdCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBob25lTnVtYmVyID0gb3JkZXJGb3JtLmVsZW1lbnRzLm51bWJlci52YWx1ZTtcclxuICAgICAgICBsZXQgZGl2V2l0aFZhbGlkYXRlVGV4dE51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvclRleHRQaG9uZU51bWJlcicpO1xyXG4gICAgICAgIGlmICghdmFsaWRhdGVGb3JtT3JkZXIocGhvbmVOdW1iZXIubWF0Y2goL14oKDh8XFwrNylbXFwtIF0/KT8oXFwoP1xcZHszfVxcKT9bXFwtIF0/KT9bXFxkXFwtIF17NywxMH0kLykgPT09IG51bGwsXHJcbiAgICAgICAgICAgIGRpdldpdGhWYWxpZGF0ZVRleHROdW1iZXIpKSB7XHJcbiAgICAgICAgICAgIGlzRm9ybUNvcnJlY3QgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgZW1haWwgPSBvcmRlckZvcm0uZWxlbWVudHMuZW1haWwudmFsdWU7XHJcbiAgICAgICAgbGV0IGRpdldpdGhWYWxpZGF0ZVRleHRFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvclRleHRFbWFpbCcpO1xyXG4gICAgICAgIGlmICghdmFsaWRhdGVGb3JtT3JkZXIoZW1haWwubWF0Y2goL15cXHd7MSwyMH1bQF0/W2Etel17MSw2fVsuXT9bYS16XXsxLDV9JC8pID09PSBudWxsLFxyXG4gICAgICAgICAgICBkaXZXaXRoVmFsaWRhdGVUZXh0RW1haWwpKSB7XHJcbiAgICAgICAgICAgIGlzRm9ybUNvcnJlY3QgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjaXR5ID0gb3JkZXJGb3JtLmVsZW1lbnRzLmNpdHlTZWxlY3QudmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2l0eSk7XHJcbiAgICAgICAgbGV0IGRpdldpdGhWYWxpZGF0ZVRleHRDaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yVGV4dENpdHknKTtcclxuICAgICAgICBpZiAoIXZhbGlkYXRlRm9ybU9yZGVyKGNpdHkgPT09ICcxJywgZGl2V2l0aFZhbGlkYXRlVGV4dENpdHkpKSB7XHJcbiAgICAgICAgICAgIGlzRm9ybUNvcnJlY3QgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29ycmVjdE5hbWVDaXR5ID0gY2l0eU1hdGNoZXNbY2l0eV07XHJcbiAgICAgICAgY29uc29sZS5sb2coY29ycmVjdE5hbWVDaXR5KTtcclxuXHJcbiAgICAgICAgbGV0IHBvc3RPZmZpY2UgPSBvcmRlckZvcm0uZWxlbWVudHMubmV3UG9zdE9mZmljZS52YWx1ZTtcclxuICAgICAgICBsZXQgZGl2V2l0aFZhbGlkYXRlVGV4dE5ld1Bvc3RPZmZpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3JUZXh0UG9zdE9mZmljZScpO1xyXG4gICAgICAgIGlmICghdmFsaWRhdGVGb3JtT3JkZXIocG9zdE9mZmljZS5tYXRjaCgvW+KEll0/WzAtOV17MSw0fS9nKSA9PT0gbnVsbCwgZGl2V2l0aFZhbGlkYXRlVGV4dE5ld1Bvc3RPZmZpY2UpKSB7XHJcbiAgICAgICAgICAgIGlzRm9ybUNvcnJlY3QgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjb21tZW50ID0gb3JkZXJGb3JtLmVsZW1lbnRzLm1lc3NhZ2UudmFsdWU7XHJcblxyXG4gICAgICAgIHNob3dPcmRlclJlc3VsdChmaXJzdE5hbWUsbGFzdE5hbWUscGhvbmVOdW1iZXIsZW1haWwsY29ycmVjdE5hbWVDaXR5LHBvc3RPZmZpY2UsaXRlbXNPYmosaXNGb3JtQ29ycmVjdCk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtT3JkZXIoY29uZGl0aW9uLCBkaXZXaXRoVmFsaWRhdGVUZXh0KSB7XHJcbiAgICAgICAgaWYgKGNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICBkaXZXaXRoVmFsaWRhdGVUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yVGV4dEludmlzaWJsZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpdldpdGhWYWxpZGF0ZVRleHQuY2xhc3NMaXN0LmFkZCgnZXJyb3JUZXh0SW52aXNpYmxlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gIWNvbmRpdGlvbjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dPcmRlclJlc3VsdChmaXJzdE5hbWUsbGFzdE5hbWUscGhvbmVOdW1iZXIsZW1haWwsY29ycmVjdE5hbWVDaXR5LHBvc3RPZmZpY2UsaXRlbXNPYmosaXNGb3JtQ29ycmVjdCkge1xyXG4gICAgaWYgKGlzRm9ybUNvcnJlY3QpIHtcclxuICAgICAgICBsZXQgb3JkZXJSZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yZGVyUmVzdWx0XCIpO1xyXG4gICAgICAgIGxldCBvcmRlck51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JkZXJOdW1iZXJcIik7XHJcbiAgICAgICAgbGV0IHJlc3VsdE1vZGVsID0gJCgnI3Jlc3VsdE1vZGFsJykub24oJ2hpZGRlbi5icy5tb2RhbCcsZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdkYXRhQ2FydCcpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmPVwiL1wiO1xyXG4gICAgICAgIH0gKVxyXG5cclxuICAgICAgICBvcmRlck51bWJlci5pbm5lclRleHQgPSBcIjEyMzQ1XCI7XHJcblxyXG4gICAgICAgIGxldCBodG1sID0gYDxoNT7QoXVzdG9tZXIgaW5mb3JtYXRpb246IDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtXCI+IDxzcGFuIGNsYXNzPVwiY2FwdGlvbk9yZGVyUmVzdWx0XCI+Rmlyc3QgbmFtZTogPC9zcGFuPiAke2ZpcnN0TmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1cIj4gPHNwYW4gY2xhc3M9XCJjYXB0aW9uT3JkZXJSZXN1bHRcIj5MYXN0IG5hbWU6IDwvc3Bhbj4ke2xhc3ROYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLVwiPiA8c3BhbiBjbGFzcz1cImNhcHRpb25PcmRlclJlc3VsdFwiPlBob25lOiA8L3NwYW4+JHtwaG9uZU51bWJlcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1cIj4gPHNwYW4gY2xhc3M9XCJjYXB0aW9uT3JkZXJSZXN1bHRcIj5tYWlsOiA8L3NwYW4+JHtlbWFpbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1cIj4gPHNwYW4gY2xhc3M9XCJjYXB0aW9uT3JkZXJSZXN1bHRcIj5DaXR5OiA8L3NwYW4+JHtjb3JyZWN0TmFtZUNpdHl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtXCI+IDxzcGFuIGNsYXNzPVwiY2FwdGlvbk9yZGVyUmVzdWx0XCI+UG9zdCBudW1iZXI6IDwvc3Bhbj4ke3Bvc3RPZmZpY2V9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtXCI+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLVwiPiA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkNvbGxlY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TaXplPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Db3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImhlYWRsaW5lT3JkZXJSZXN1bHRcIj5Qcm9kdWN0IGluZm9ybWF0aW9uOiA8L2g1PmA7XHJcblxyXG4gICAgICAgIGl0ZW1zT2JqLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGh0bWwgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+JHtpdGVtLm5hbWV9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtpdGVtLmNvbGxlY3Rpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtpdGVtLnNpemV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtpdGVtLnByaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7aXRlbS5xdWFudGl0eX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPmA7XHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGh0bWwgKz0gYDwvdGJvZHk+PC90YWJsZT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0IFxcYGxpc3RfMlxcYFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJHtvcmRlckhlYXJkKGl0ZW1zT2JqKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtXCI+T3VyIG1hbmFnZXIgd2lsbCBwaG9uZSB5b3UgYXMgc29vbiBhcyBwb3NzaWJsZS4gQmVzdCByZWdhcmRzPC9kaXY+YDtcclxuICAgICAgICBvcmRlclJlc3VsdC5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgIHJlc3VsdE1vZGVsLm1vZGFsKCdzaG93Jyk7XHJcbiAgICB9XHJcbn0iXX0=
