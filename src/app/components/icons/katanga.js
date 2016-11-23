import React, { PropTypes } from 'react'

const Katanga = ( { circleFillColor, circleBorderColor, busAndTextColor } ) => (
    <svg width="549" height="549" viewBox="0 0 549 549">
      <g fill="none" fillRule="evenodd" transform="translate(3 3)">
        <circle cx="271.5" cy="271.5" r="271.5" fill={circleFillColor} stroke={circleBorderColor} strokeWidth="5"/>
        <path fill={busAndTextColor} d="M421.5271,217 L415.100741,217 L414.950568,148.460269 L393.464823,123.799605 L339.48079,120.117594 C339.48079,120.117594 339.48079,104.254361 339.48079,104.254361 C339.48079,104.254361 204.039011,103.421959 204.039011,104.768806 C204.039011,106.115653 204.039011,120.117594 204.039011,120.117594 L149.131463,123.799605 L127.585324,148.460269 L127.585324,222 L128,222 L128,238 L127.585324,238 L127.585324,378.118482 L125,378.118482 L125,408 L418,408 L418,378.118482 L415.453758,378.118482 L415.157708,243 L434.5271,243 L434.5271,230 L441.535945,230 C442.635629,230 443.5271,229.107783 443.5271,227.99791 L443.5271,178.00209 C443.5271,176.896366 442.637426,176 441.535945,176 L423.518255,176 C422.41857,176 421.5271,176.892217 421.5271,178.00209 L421.5271,217 Z M421.5271,222 L414.5271,222 L414.5271,238 L429.5271,238 L429.5271,230 L423.518255,230 C422.416774,230 421.5271,229.103634 421.5271,227.99791 L421.5271,222 Z M121,217 L127.5271,217 L127.5271,222 L121,222 L121,227.99791 C121,229.103634 120.110326,230 119.008845,230 L113,230 L113,238 L127.5271,238 L127.5271,243 L108,243 L108,230 L100.991155,230 C99.8914705,230 99,229.107783 99,227.99791 L99,178.00209 C99,176.896366 99.8896739,176 100.991155,176 L119.008845,176 C120.10853,176 121,176.892217 121,178.00209 L121,217 Z M151.310023,128.843972 L203.014554,125.596119 L203.161603,148.689028 L135.479064,148.689028 L151.310023,128.843972 Z M391.436428,128.843972 L339.731896,125.596119 L339.584847,148.689028 L407.267387,148.689028 L391.436428,128.843972 Z M209.043558,110.008675 L334.108376,110.008675 L334.108376,158.078071 L209.043558,158.078071 L209.043558,110.008675 Z M132.544953,153.911411 L201.092436,153.911411 C201.092436,153.911411 201.130793,158.379287 203.063435,160.61347 C204.996078,162.847652 208.813974,162.847652 208.813974,162.847652 L269.309167,162.847652 L269.309167,291.505649 L132.187319,291.505649 L132.544953,153.911411 Z M409.790151,153.911411 L341.242669,153.911411 C341.242669,153.911411 341.204312,158.379287 339.271669,160.61347 C337.339027,162.847652 333.52113,162.847652 333.52113,162.847652 L274.260952,162.847652 L274.260952,291.505649 L410.147786,291.505649 L409.790151,153.911411 Z M132.524658,296.649658 L410,296.649658 L410,378 L132.524658,378 L132.524658,296.649658 Z M221,315.006024 C221,310.584419 224.579366,307 228.997358,307 L308.002642,307 C312.419461,307 316,310.588092 316,315.006024 L316,359.993976 C316,364.415581 312.420634,368 308.002642,368 L228.997358,368 C224.580539,368 221,364.411908 221,359.993976 L221,315.006024 Z M150.319982,318.665229 C150.294546,315.350337 152.951016,312.663086 156.264619,312.663086 L195.415312,312.663086 C198.723881,312.663086 201.406006,315.346776 201.406006,318.665229 L201.406006,352.572564 C201.406006,355.887456 198.711717,358.574707 195.406563,358.574707 L156.625663,358.574707 C153.312263,358.574707 150.605628,355.891017 150.580164,352.572564 L150.319982,318.665229 Z M335.319982,318.665229 C335.294546,315.350337 337.951016,312.663086 341.264619,312.663086 L380.415312,312.663086 C383.723881,312.663086 386.406006,315.346776 386.406006,318.665229 L386.406006,352.572564 C386.406006,355.887456 383.711717,358.574707 380.406563,358.574707 L341.625663,358.574707 C338.312263,358.574707 335.605628,355.891017 335.580164,352.572564 L335.319982,318.665229 Z M130,383 L413,383 L413,403 L130,403 L130,383 Z M340,319.0024 C340,317.896505 340.89666,317 341.997492,317 L380.002508,317 C381.105692,317 382,317.896279 382,319.0024 L382,351.9976 C382,353.103495 381.10334,354 380.002508,354 L341.997492,354 C340.894308,354 340,353.103721 340,351.9976 L340,319.0024 Z M155,319.0024 C155,317.896505 155.89666,317 156.997492,317 L195.002508,317 C196.105692,317 197,317.896279 197,319.0024 L197,351.9976 C197,353.103495 196.10334,354 195.002508,354 L156.997492,354 C155.894308,354 155,353.103721 155,351.9976 L155,319.0024 Z M226,313.99926 C226,312.895099 226.897077,312 227.996586,312 L309.003414,312 C310.106098,312 311,312.895992 311,313.99926 L311,361.00074 C311,362.104901 310.102923,363 309.003414,363 L227.996586,363 C226.893902,363 226,362.104008 226,361.00074 L226,313.99926 Z M150,408 L199,408 L199,436.008383 C199,437.108323 198.107685,438 197.003148,438 L151.996852,438 C150.894021,438 150,437.10216 150,436.008383 L150,408 Z M344,408 L393,408 L393,436.008383 C393,437.108323 392.107685,438 391.003148,438 L345.996852,438 C344.894021,438 344,437.10216 344,436.008383 L344,408 Z M348.567139,408 L387.367432,408 L387.367432,432.890625 L348.567139,432.890625 L348.567139,408 Z M155.567139,408 L194.367432,408 L194.367432,432.890625 L155.567139,432.890625 L155.567139,408 Z M104,181 L116,181 L116,226 L104,226 L104,181 Z M438.5271,181 L426.5271,181 L426.5271,226 L438.5271,226 L438.5271,181 Z"/>
      </g>
    </svg>
)

Katanga.propTypes = {
    circleFillColor: PropTypes.string,
    circleBorderColor: PropTypes.string,
    busAndTextColor: PropTypes.string
}

export default Katanga


