

import "./login.css";

function Login (){ 
    return ( 
        
        
        <div className="login_container">
          
            <div className="login_form">
                <h1>Login</h1>
                <form>
                    <input type="email" placeholder="Email"  />
                    <input type="password" placeholder="Password" />
                    <button className="loginButton">Login</button>
                </form>
            </div> 

            <div className="second_container">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="613.35286" height="700.56123" viewBox="0 0 613.35286 700.56123" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M587.667,756.93133l-.78168-17.57606q-.12187-.06468-.24405-.12879c-8.37606-4.39513-17.97576,3.561-15.3004,12.63392,2.51722,8.5366,4.20846,17.73958,8.81613,25.21162a34.14441,34.14441,0,0,0,25.03847,15.77861l10.64166,6.51555a57.21525,57.21525,0,0,0-12.05953-46.36368,55.2668,55.2668,0,0,0-10.157-9.4375C591.07189,750.28541,587.667,756.93133,587.667,756.93133Z" transform="translate(-293.32357 -99.71938)" fill="#f2f2f2"/><path d="M492.3909,578.56387c-20.48783-21.12931-50.17767-33.24712-81.45666-33.24712l-1.20652.00324a116.3146,116.3146,0,0,1-58.63546-15.83485l-1.85205-1.07912,1.49167-1.537a113.37272,113.37272,0,0,0,19.99317-28.30616,34.28239,34.28239,0,0,1-27.66751,8.93789,35.10416,35.10416,0,0,1-25.77016-16.50626c-10.93231-17.73787-23.96381-42.90658-23.96381-62.0803a116.66888,116.66888,0,0,1,38.0631-86.091,72.65143,72.65143,0,0,0,23.99981-54.17137l-.00607-1.45284a164.77416,164.77416,0,0,1,4.8908-39.87268l.33005-1.31694,1.355.04732a111.39121,111.39121,0,0,0,26.04681-2.1821,87.918,87.918,0,0,1-23.35954-6.213l-1.45769-.58971.4947-1.4937C397.78172,214.464,474.7579,225.398,519.43718,123.17462,555.666,40.28535,683.49348,196.75549,683.49348,287.199c0,9.2287-9.13324,21.42423-2.29615,27.52391,73.90979,65.93827,22.91308,108.27972,6.83466,150.88534-3.81479,10.10871,4.45682,21.20613,4.45682,32.14249,0,1.85569-.04732,3.77124-.14076,5.69327l-.14237,2.955-2.46441-1.63971a81.62563,81.62563,0,0,1-13.47964-11.05649,71.13531,71.13531,0,0,1-2.25612,61.41172c-7.74552,14.619-15.23907,25.085-22.27193,31.10507a116.2904,116.2904,0,0,1-159.34268-7.65574Z" transform="translate(-293.32357 -99.71938)" fill="#e6e6e6"/><path d="M616.13152,798.499a2.09333,2.09333,0,0,0,2.06993-1.79837c.08893-.62489,8.80049-63.45379.97652-146.956-7.22548-77.11632-30.4294-188.191-99.9393-279.41478a2.0935,2.0935,0,1,0-3.33028,2.53775c68.90954,90.436,91.9264,200.69567,99.10094,277.2675,7.77849,83.01636-.86476,145.3553-.953,145.97542a2.09519,2.09519,0,0,0,2.0752,2.38851Z" transform="translate(-293.32357 -99.71938)" fill="#3f3d56"/><path d="M559.40732,499.0052a2.09343,2.09343,0,0,0,1.23242-3.78686c-.25231-.18331-25.681-18.50562-63.69657-32.425-35.14253-12.86589-88.582-24.5297-143.597-7.02036a2.0932,2.0932,0,1,0,1.26956,3.98925c53.88785-17.14953,106.35862-5.67858,140.88784,6.96312,37.47293,13.72044,62.427,31.7,62.67472,31.87988A2.08515,2.08515,0,0,0,559.40732,499.0052Z" transform="translate(-293.32357 -99.71938)" fill="#3f3d56"/><path d="M655.2196,260.37275a2.09343,2.09343,0,0,0-3.68827-1.50192c-.201.23845-20.307,24.28166-36.928,61.19609-15.36327,34.12475-30.84523,86.58548-17.34326,142.71855a2.09319,2.09319,0,1,0,4.07031-.979c-13.22427-54.983,1.99558-106.49141,17.09108-140.02058,16.38342-36.38756,36.11335-59.982,36.31062-60.21616A2.0852,2.0852,0,0,0,655.2196,260.37275Z" transform="translate(-293.32357 -99.71938)" fill="#3f3d56"/><path d="M652.38648,368.31675c1.76623,14.25037,11.64059,26,26,26a26,26,0,0,0,26-26c0-14.3594-11.70215-24.67241-26-26C663.21558,340.90809,650.11884,350.02107,652.38648,368.31675Z" transform="translate(-293.32357 -99.71938)" fill="#2f2e41"/><polygon points="397.105 687.328 407.006 687.327 411.716 649.137 397.103 649.138 397.105 687.328" fill="#ffb6b6"/><path d="M690.08055,797.37579l30.447-.00116v-.385A11.85149,11.85149,0,0,0,708.67674,785.139H708.676l-5.56152-4.21923-10.37659,4.21991-2.65783.00006Z" transform="translate(-293.32357 -99.71938)" fill="#2f2e41"/><polygon points="358.105 687.328 368.006 687.327 372.716 649.137 358.103 649.138 358.105 687.328" fill="#ffb6b6"/><path d="M651.08055,797.37579l30.447-.00116v-.385A11.85149,11.85149,0,0,0,669.67674,785.139H669.676l-5.56152-4.21923-10.37659,4.21991-2.65783.00006Z" transform="translate(-293.32357 -99.71938)" fill="#2f2e41"/><path d="M724.50065,547.85614l7,24L723.25419,673.501s4.24646,6.35511,1.24646,6.35511-6.84686,1.40942-4.4234,5.20471-5.86,17.4209-5.86,17.4209l-11.71661,72.37439-14.92914-.22046s-7.59009-4.22833-3.3305-8.504,7.25958-4.27557,3.25958-8.27557-4-2.79529-4-5.89765-4.00751-41.01574,5.49628-55.559l-2.86365-59.29529-6.74457,58.16144-13.888,77.59052-14.38171-.11847s-6.64276-6.40271-6.6305-11.14209,4.10419-5.13312,1.05823-7.93628-3.046-45.86615,5.954-69.80316c0,0,5.09108-13.37393-.01155-17.95666s-.00631-9.82652-.00631-9.82652,8.08172-2.92145-.0073-11.33883-.04369-67.94913-.04369-67.94913-8.84271-24.03067.1131-33.47977S724.50065,547.85614,724.50065,547.85614Z" transform="translate(-293.32357 -99.71938)" fill="#2f2e41"/><path d="M599.82611,589.20574l12.48925-30.1823,9.84,5.46667-5.94253,30.70307a10.93464,10.93464,0,1,1-16.38671-5.98744Z" transform="translate(-293.32357 -99.71938)" fill="#ffb6b6"/><path d="M809.4002,350.535l-19.00315,26.56751-8.34544-7.554,12.7447-28.5581A10.93464,10.93464,0,1,1,809.4002,350.535Z" transform="translate(-293.32357 -99.71938)" fill="#ffb6b6"/><path d="M726.38648,550.31675c12.32568,19.11831-49.63137,43.38055-73.40448,33.64-4.1628-1.7056-18.48212-7.33918-8.69439-15.14958s-1.1348-8.90952-1.393-13.99392c-.1726-3.39918,2.45917-10.85592-.28674-10.5362s-5.95975-4.3811.0205-6.404.06411-3.86767.11651-5.78787c.57186-20.95538,16.64979-54.2869,16.64979-54.2869l-28.971,74.05682s.214,12.81223-3.48049,8.897-3.42565,8.75675-3.42565,8.75675-5.49354,3.83389-2.33452,5.9676-3.401,8.6937-3.401,8.6937l-15.30666-1.09334s.23964-11.37068,2.85315-13.88533,1.32975-6.47144,1.32975-6.47144,6.80457-6.02348,2.24268-10.91429c-5.86712-6.29013,15.52417-112.52993,22.90637-111.47784a28.12048,28.12048,0,0,1,20.08017-21.45161l16.53221-4.55191,2.93564-11.64749h23.27852l4.0548,7.65333,17.69783,7.98657c3.33362-4.70352,5.82477-9.65991,19.47546-11.26657,0,0,36.78255-33.46683,34.98668-36.08s3.906-8.73109,3.906-8.73109,4.86956-1.59377,2.12179-2.44467,2.446-2.81826,2.446-2.81826,4.81028-1.264,2.54157-2.92832,7.57128-2.75765,7.57128-2.75765l12.767,10.4168-2.58037,4.37541s1.5733,5.958-.48,3.78289-2.43983,4.1371-2.43983,4.1371-1.0486,6.912-7.26682,8.99446S778.502,404.8635,778.502,404.8635c-14.6648,19.0673-31.97132,33.9415-52.48,43.73331C734.01483,457.77113,726.38648,550.31675,726.38648,550.31675Z" transform="translate(-293.32357 -99.71938)" fill="#ff8000"/><circle cx="387.93692" cy="273.08556" r="23.0557" fill="#ffb6b6"/><path d="M657.38648,375.31675c.73,5.01,5,12,4,12s-8.11-20.65332-1-22c5.15722-.97681,6.31-.12,11.13-2.21l-.68.64c3.19,2.32,7.63.89,11.27-.62,3.65-1.5,8.08-2.93,11.28-.62,2.01,1.45,2.86,3.97,4.11,6.11,1.25,2.15,3.56,4.18,5.94,3.52,1.91-.53,3.01-2.67005,3-4.65s-2.58825-3.86355-1.72-5.64c2.57319-5.26444.25916-8.85275-5.35-11.33q-3.06-.465-6.12-.95a17.35842,17.35842,0,0,1,3.84-3.86,8.77436,8.77436,0,0,0-3.1-3.97c-1.63-.97-3.65-.9-5.54-.8q-6.33.33-12.65.66c-3.12.16-6.35.35-9.13995,1.78-3.48,1.79-5.76,5.28-7.42005,8.83C655.51648,360.18675,656.10645,366.60679,657.38648,375.31675Z" transform="translate(-293.32357 -99.71938)" fill="#2f2e41"/><path d="M561.476,799.97328l226.75.30734a1.19068,1.19068,0,1,0,0-2.38137l-226.75-.30733a1.19068,1.19068,0,0,0,0,2.38136Z" transform="translate(-293.32357 -99.71938)" fill="#cacaca"/><ellipse cx="471.98821" cy="695.09416" rx="5.25681" ry="7.55666" transform="translate(-577.14417 962.36498) rotate(-81.72174)" fill="#e6e6e6"/><ellipse cx="521.15973" cy="690.29611" rx="5.2568" ry="7.55666" transform="translate(-530.30434 1006.91693) rotate(-81.72174)" fill="#3f3d56"/><ellipse cx="458.5236" cy="655.286" rx="5.25681" ry="7.55666" transform="translate(-549.27676 914.96411) rotate(-81.72174)" fill="#ff6584"/><ellipse cx="441.31304" cy="640.04291" rx="4.77581" ry="3.3223" transform="translate(-495.37215 976.78425) rotate(-89.56675)" fill="#e6e6e6"/><ellipse cx="434.06731" cy="609.6713" rx="4.77581" ry="3.3223" transform="translate(-472.19234 939.39678) rotate(-89.56675)" fill="#3f3d56"/><ellipse cx="490.41248" cy="663.12322" rx="4.77581" ry="3.3223" transform="translate(-469.72363 1048.78806) rotate(-89.56675)" fill="#e6e6e6"/><ellipse cx="466.65067" cy="674.98721" rx="4.77581" ry="3.3223" transform="translate(-505.16941 1036.80122) rotate(-89.56675)" fill="#ff6584"/><ellipse cx="499.72794" cy="696.91495" rx="4.77581" ry="3.3223" transform="translate(-494.26937 1091.63947) rotate(-89.56675)" fill="#3f3d56"/><ellipse cx="849.98821" cy="541.09416" rx="5.25681" ry="7.55666" transform="translate(-101.17347 1204.59943) rotate(-81.72174)" fill="#e6e6e6"/><ellipse cx="899.15973" cy="536.29611" rx="5.2568" ry="7.55666" transform="translate(-54.33364 1249.15138) rotate(-81.72174)" fill="#3f3d56"/><ellipse cx="836.5236" cy="501.286" rx="5.25681" ry="7.55666" transform="matrix(0.14398, -0.98958, 0.98958, 0.14398, -73.30606, 1157.19856)" fill="#ff6584"/><ellipse cx="819.31304" cy="486.04292" rx="4.77581" ry="3.3223" transform="translate(33.76519 1201.93792) rotate(-89.56675)" fill="#e6e6e6"/><ellipse cx="812.06731" cy="455.6713" rx="4.77581" ry="3.3223" transform="translate(56.94499 1164.55045) rotate(-89.56675)" fill="#3f3d56"/><ellipse cx="868.41248" cy="509.12322" rx="4.77581" ry="3.3223" transform="translate(59.41371 1273.94173) rotate(-89.56675)" fill="#e6e6e6"/><ellipse cx="844.65067" cy="520.98721" rx="4.77581" ry="3.3223" transform="translate(23.96793 1261.95489) rotate(-89.56675)" fill="#ff6584"/><ellipse cx="877.72794" cy="542.91495" rx="4.77581" ry="3.3223" transform="translate(34.86796 1316.79314) rotate(-89.56675)" fill="#3f3d56"/><ellipse cx="666.98821" cy="256.09416" rx="5.25681" ry="7.55666" transform="translate(24.20544 779.54069) rotate(-81.72174)" fill="#fff"/><ellipse cx="716.15973" cy="251.29611" rx="5.2568" ry="7.55666" transform="translate(71.04527 824.09264) rotate(-81.72174)" fill="#3f3d56"/><ellipse cx="653.5236" cy="216.286" rx="5.25681" ry="7.55666" transform="translate(52.07285 732.13983) rotate(-81.72174)" fill="#ff6584"/><ellipse cx="636.31304" cy="201.04292" rx="4.77581" ry="3.3223" transform="translate(137.1408 736.09819) rotate(-89.56675)" fill="#e6e6e6"/><ellipse cx="629.06731" cy="170.6713" rx="4.77581" ry="3.3223" transform="translate(160.32061 698.71071) rotate(-89.56675)" fill="#3f3d56"/><ellipse cx="685.41248" cy="224.12322" rx="4.77581" ry="3.3223" transform="translate(162.78933 808.102) rotate(-89.56675)" fill="#e6e6e6"/><ellipse cx="661.65067" cy="235.98721" rx="4.77581" ry="3.3223" transform="translate(127.34354 796.11516) rotate(-89.56675)" fill="#ff6584"/><ellipse cx="694.72794" cy="257.91495" rx="4.77581" ry="3.3223" transform="translate(138.24358 850.95341) rotate(-89.56675)" fill="#3f3d56"/></svg>
            </div>

        </div>
    )

}

export default Login; 
