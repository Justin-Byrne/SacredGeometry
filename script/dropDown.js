"use strict";

////////////////////////////////////////////////////////////////////////////////////////////////////
////////                            GLOBAL VARIABLES                                        ////////
////////////////////////////////////////////////////////////////////////////////////////////////////

let menu = 
`<ul>
	<!-- Main -->
	<li>
		<a href="#">
			<span class="label">Main</span>
		</a>
		<ul>
			<li class="disabled">
				<a href="#">
					<span class="label" id="load-file">load</span>
				</a>
			</li>
			<li class="separator"></li>
			<li>
                <a href="#">
                    <span class="label" id="clear-canvas">Clear</span>
                </a>
        	</li>
		</ul>
	</li>
	<!-- Circles -->
	<li>
		<a href="#">
			<span class="label">Circles</span>
		</a>
		<ul>
			<!-- Seed -->
        	<li>
                <a href="#">
                    <input type="checkbox" id="circle-00-01-checkbox" class="single-circle-checkbox" value="0"/>
                    <label class="label" for="circle-00-01-checkbox">Seed</label>
				</a>
            </li>
            <li class="separator"></li>
            <!-- Sequence 1 -->
        	<li class="has-children">
                <a href="#">
                    <input type="checkbox" id="sequenced-circle-01-checkbox" class="sequenced-circle-checkbox" value="1"/>
	                <label class="label" for="sequenced-circle-01-checkbox">01</label>
                </a>
                <ul>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-01-01-checkbox" class="single-circle-checkbox" value="1"/>
                        	<label class="label" for="circle-01-01-checkbox">01</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-01-02-checkbox" class="single-circle-checkbox" value="2"/>
                        	<label class="label" for="circle-01-02-checkbox">02</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-01-03-checkbox" class="single-circle-checkbox" value="3"/>
                        	<label class="label" for="circle-01-03-checkbox">03</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-01-04-checkbox" class="single-circle-checkbox" value="4"/>
                        	<label class="label" for="circle-01-04-checkbox">04</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-01-05-checkbox" class="single-circle-checkbox" value="5"/>
                        	<label class="label" for="circle-01-05-checkbox">05</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-01-06-checkbox" class="single-circle-checkbox" value="6"/>
                        	<label class="label" for="circle-01-06-checkbox">06</label>
						</a>
                    </li>
                </ul>
        	</li>
        	<!-- Sequence 2 -->
        	<li class="has-children">
                <a href="#">
                    <input type="checkbox" id="sequenced-circle-02-checkbox" class="sequenced-circle-checkbox" value="2"/>
	                <label class="label" for="sequenced-circle-02-checkbox">02</label>
                </a>
                <ul>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-02-01-checkbox" class="single-circle-checkbox" value="7"/>
                        	<label class="label" for="circle-02-01-checkbox">01</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-02-02-checkbox" class="single-circle-checkbox" value="8"/>
                        	<label class="label" for="circle-02-02-checkbox">02</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-02-03-checkbox" class="single-circle-checkbox" value="9"/>
                        	<label class="label" for="circle-02-03-checkbox">03</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-02-04-checkbox" class="single-circle-checkbox" value="10"/>
                        	<label class="label" for="circle-02-04-checkbox">04</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-02-05-checkbox" class="single-circle-checkbox" value="11"/>
                        	<label class="label" for="circle-02-05-checkbox">05</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-02-06-checkbox" class="single-circle-checkbox" value="12"/>
                        	<label class="label" for="circle-02-06-checkbox">06</label>
						</a>
                    </li>
                </ul>
        	</li>
        	<!-- Sequence 3 -->
        	<li class="has-children">
                <a href="#">
                    <input type="checkbox" id="sequenced-circle-03-checkbox" class="sequenced-circle-checkbox" value="3"/>
	                <label class="label" for="sequenced-circle-03-checkbox">03</label>
                </a>
                <ul>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-03-01-checkbox" class="single-circle-checkbox" value="13"/>
                        	<label class="label" for="circle-03-01-checkbox">01</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-03-02-checkbox" class="single-circle-checkbox" value="14"/>
                        	<label class="label" for="circle-03-02-checkbox">02</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-03-03-checkbox" class="single-circle-checkbox" value="15"/>
                        	<label class="label" for="circle-03-03-checkbox">03</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-03-04-checkbox" class="single-circle-checkbox" value="16"/>
                        	<label class="label" for="circle-03-04-checkbox">04</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-03-05-checkbox" class="single-circle-checkbox" value="17"/>
                        	<label class="label" for="circle-03-05-checkbox">05</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-03-06-checkbox" class="single-circle-checkbox" value="18"/>
                        	<label class="label" for="circle-03-06-checkbox">06</label>
						</a>
                    </li>
                </ul>
        	</li>
        	<!-- Sequence 4 -->
        	<li class="has-children">
                <a href="#">
                    <input type="checkbox" id="sequenced-circle-04-checkbox" class="sequenced-circle-checkbox" value="4"/>
	                <label class="label" for="sequenced-circle-04-checkbox">04</label>
                </a>
                <ul>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-04-01-checkbox" class="single-circle-checkbox" value="19"/>
                        	<label class="label" for="circle-04-01-checkbox">01</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-04-02-checkbox" class="single-circle-checkbox" value="20"/>
                        	<label class="label" for="circle-04-02-checkbox">02</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-04-03-checkbox" class="single-circle-checkbox" value="21"/>
                        	<label class="label" for="circle-04-03-checkbox">03</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-04-04-checkbox" class="single-circle-checkbox" value="22"/>
                        	<label class="label" for="circle-04-04-checkbox">04</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-04-05-checkbox" class="single-circle-checkbox" value="23"/>
                        	<label class="label" for="circle-04-05-checkbox">05</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-04-06-checkbox" class="single-circle-checkbox" value="24"/>
                        	<label class="label" for="circle-04-06-checkbox">06</label>
						</a>
                    </li>
                </ul>
        	</li>
        	<!-- Sequence 5 -->
        	<li class="has-children">
                <a href="#">
                    <input type="checkbox" id="sequenced-circle-05-checkbox" class="sequenced-circle-checkbox" value="5"/>
	                <label class="label" for="sequenced-circle-05-checkbox">05</label>
                </a>
                <ul>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-05-01-checkbox" class="single-circle-checkbox" value="25"/>
                        	<label class="label" for="circle-05-01-checkbox">01</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-05-02-checkbox" class="single-circle-checkbox" value="26"/>
                        	<label class="label" for="circle-05-02-checkbox">02</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-05-03-checkbox" class="single-circle-checkbox" value="27"/>
                        	<label class="label" for="circle-05-03-checkbox">03</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-05-04-checkbox" class="single-circle-checkbox" value="28"/>
                        	<label class="label" for="circle-05-04-checkbox">04</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-05-05-checkbox" class="single-circle-checkbox" value="29"/>
                        	<label class="label" for="circle-05-05-checkbox">05</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-05-06-checkbox" class="single-circle-checkbox" value="30"/>
                        	<label class="label" for="circle-05-06-checkbox">06</label>
						</a>
                    </li>
                </ul>
        	</li>
        	<!-- Sequence 6 -->
        	<li class="has-children">
                <a href="#">
                    <input type="checkbox" id="sequenced-circle-06-checkbox" class="sequenced-circle-checkbox" value="6"/>
	                <label class="label" for="sequenced-circle-06-checkbox">06</label>
                </a>
                <ul>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-06-01-checkbox" class="single-circle-checkbox" value="31"/>
                        	<label class="label" for="circle-06-01-checkbox">01</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-06-02-checkbox" class="single-circle-checkbox" value="32"/>
                        	<label class="label" for="circle-06-02-checkbox">02</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-06-03-checkbox" class="single-circle-checkbox" value="33"/>
                        	<label class="label" for="circle-06-03-checkbox">03</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-06-04-checkbox" class="single-circle-checkbox" value="34"/>
                        	<label class="label" for="circle-06-04-checkbox">04</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-06-05-checkbox" class="single-circle-checkbox" value="35"/>
                        	<label class="label" for="circle-06-05-checkbox">05</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-06-06-checkbox" class="single-circle-checkbox" value="36"/>
                        	<label class="label" for="circle-06-06-checkbox">06</label>
						</a>
                    </li>
                </ul>
        	</li>
        	<!-- Sequence 7 -->
        	<li class="has-children">
                <a href="#">
                    <input type="checkbox" id="sequenced-circle-07-checkbox" class="sequenced-circle-checkbox" value="7"/>
	                <label class="label" for="sequenced-circle-07-checkbox">07</label>
                </a>
                <ul>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-07-01-checkbox" class="single-circle-checkbox" value="37"/>
                        	<label class="label" for="circle-07-01-checkbox">01</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-07-02-checkbox" class="single-circle-checkbox" value="38"/>
                        	<label class="label" for="circle-07-02-checkbox">02</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-07-03-checkbox" class="single-circle-checkbox" value="39"/>
                        	<label class="label" for="circle-07-03-checkbox">03</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-07-04-checkbox" class="single-circle-checkbox" value="40"/>
                        	<label class="label" for="circle-07-04-checkbox">04</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-07-05-checkbox" class="single-circle-checkbox" value="41"/>
                        	<label class="label" for="circle-07-05-checkbox">05</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-07-06-checkbox" class="single-circle-checkbox" value="42"/>
                        	<label class="label" for="circle-07-06-checkbox">06</label>
						</a>
                    </li>
                </ul>
        	</li>
        	<!-- Sequence 8 -->
        	<li class="has-children">
                <a href="#">
                    <input type="checkbox" id="sequenced-circle-08-checkbox" class="sequenced-circle-checkbox" value="8"/>
	                <label class="label" for="sequenced-circle-08-checkbox">08</label>
                </a>
                <ul>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-08-01-checkbox" class="single-circle-checkbox" value="43"/>
                        	<label class="label" for="circle-08-01-checkbox">01</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-08-02-checkbox" class="single-circle-checkbox" value="44"/>
                        	<label class="label" for="circle-08-02-checkbox">02</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-08-03-checkbox" class="single-circle-checkbox" value="45"/>
                        	<label class="label" for="circle-08-03-checkbox">03</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-08-04-checkbox" class="single-circle-checkbox" value="46"/>
                        	<label class="label" for="circle-08-04-checkbox">04</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-08-05-checkbox" class="single-circle-checkbox" value="47"/>
                        	<label class="label" for="circle-08-05-checkbox">05</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-08-06-checkbox" class="single-circle-checkbox" value="48"/>
                        	<label class="label" for="circle-08-06-checkbox">06</label>
						</a>
                    </li>
                </ul>
        	</li>
        	<!-- Sequence 9 -->
        	<li class="has-children">
                <a href="#">
                    <input type="checkbox" id="sequenced-circle-09-checkbox" class="sequenced-circle-checkbox" value="9"/>
	                <label class="label" for="sequenced-circle-09-checkbox">09</label>
                </a>
                <ul>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-09-01-checkbox" class="single-circle-checkbox" value="49"/>
                        	<label class="label" for="circle-09-01-checkbox">01</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-09-02-checkbox" class="single-circle-checkbox" value="50"/>
                        	<label class="label" for="circle-09-02-checkbox">02</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-09-03-checkbox" class="single-circle-checkbox" value="51"/>
                        	<label class="label" for="circle-09-03-checkbox">03</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-09-04-checkbox" class="single-circle-checkbox" value="52"/>
                        	<label class="label" for="circle-09-04-checkbox">04</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-09-05-checkbox" class="single-circle-checkbox" value="53"/>
                        	<label class="label" for="circle-09-05-checkbox">05</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-09-06-checkbox" class="single-circle-checkbox" value="54"/>
                        	<label class="label" for="circle-09-06-checkbox">06</label>
						</a>
                    </li>
                </ul>
        	</li>
        	<!-- Sequence 10 -->
        	<li class="has-children">
                <a href="#">
                    <input type="checkbox" id="sequenced-circle-10-checkbox" class="sequenced-circle-checkbox" value="10"/>
	                <label class="label" for="sequenced-circle-10-checkbox">10</label>
                </a>
                <ul>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-10-01-checkbox" class="single-circle-checkbox" value="55"/>
                        	<label class="label" for="circle-10-01-checkbox">01</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-10-02-checkbox" class="single-circle-checkbox" value="56"/>
                        	<label class="label" for="circle-10-02-checkbox">02</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-10-03-checkbox" class="single-circle-checkbox" value="57"/>
                        	<label class="label" for="circle-10-03-checkbox">03</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-10-04-checkbox" class="single-circle-checkbox" value="58"/>
                        	<label class="label" for="circle-10-04-checkbox">04</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-10-05-checkbox" class="single-circle-checkbox" value="59"/>
                        	<label class="label" for="circle-10-05-checkbox">05</label>
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<input type="checkbox" id="circle-10-06-checkbox" class="single-circle-checkbox" value="60"/>
                        	<label class="label" for="circle-10-06-checkbox">06</label>
						</a>
                    </li>
                </ul>
        	</li>
        	<!-- Full Circle -->
        	<!-- <li class="separator"></li>
	        <li>
	            <a href="#">
	                <input type="checkbox" id="full-circle-cycle-checkbox"/>
	                <label class="label fullcycle" for="full-circle-cycle-checkbox" id="full-circle-cycle">Full</label>
				</a>
	        </li> -->
        </ul>
	</li>
	<!-- Hexagons -->
	<li>
		<a href="#">
			<span class="label">Hexagons</span>
		</a>
		<ul>
			<!-- Sequence 1 -->
	        <li>
	            <a href="#">
	                <input type="checkbox" id="hexagon-01-checkbox" class="hexagon-checkbox" value="1"/>
	                <label class="label" for="hexagon-01-checkbox">01</label>
				</a>
	        </li>
	        <!-- Sequence 2 -->
	        <li>
	            <a href="#">
	                <input type="checkbox" id="hexagon-02-checkbox" class="hexagon-checkbox" value="2"/>
	                <label class="label" for="hexagon-02-checkbox">02</label>
				</a>
	        </li>
	        <!-- Sequence 3 -->
	        <li>
	            <a href="#">
	                <input type="checkbox" id="hexagon-03-checkbox" class="hexagon-checkbox" value="3"/>
	                <label class="label" for="hexagon-03-checkbox">03</label>
				</a>
	        </li>
	        <!-- Sequence 4 -->
	        <li>
	            <a href="#">
	                <input type="checkbox" id="hexagon-04-checkbox" class="hexagon-checkbox" value="4"/>
	                <label class="label" for="hexagon-04-checkbox">04</label>
				</a>
	        </li>
	        <!-- Sequence 5 -->
	        <li>
	            <a href="#">
	                <input type="checkbox" id="hexagon-05-checkbox" class="hexagon-checkbox" value="5"/>
	                <label class="label" for="hexagon-05-checkbox">05</label>
				</a>
	        </li>
	        <!-- Sequence 6 -->
	        <li>
	            <a href="#">
	                <input type="checkbox" id="hexagon-06-checkbox" class="hexagon-checkbox" value="6"/>
	                <label class="label" for="hexagon-06-checkbox">06</label>
				</a>
	        </li>
	        <!-- Sequence 7 -->
	        <li>
	            <a href="#">
	                <input type="checkbox" id="hexagon-07-checkbox" class="hexagon-checkbox" value="7"/>
	                <label class="label" for="hexagon-07-checkbox">07</label>
				</a>
	        </li>
	        <!-- Sequence 8 -->
	        <li>
	            <a href="#">
	                <input type="checkbox" id="hexagon-08-checkbox" class="hexagon-checkbox" value="8"/>
	                <label class="label" for="hexagon-08-checkbox">08</label>
				</a>
	        </li>
	        <!-- Sequence 9 -->
	        <li>
	            <a href="#">
	                <input type="checkbox" id="hexagon-09-checkbox" class="hexagon-checkbox" value="9"/>
	                <label class="label" for="hexagon-09-checkbox">09</label>
				</a>
	        </li>
	        <!-- Sequence 10 -->
	        <li>
	            <a href="#">
	                <input type="checkbox" id="hexagon-10-checkbox" class="hexagon-checkbox" value="10"/>
	                <label class="label" for="hexagon-10-checkbox">10</label>
				</a>
	        </li>
	        <!-- Full Sequence -->
	        <!-- <li class="separator"></li>
	        <li>
	            <a href="#">
	                <input type="checkbox" id="full-hexagon-checkbox"/>
	                <label class="label" for="full-hexagon-checkbox" id="full-hexagon-cycle">Full</label>
				</a>
	        </li> -->
	    </ul>
	</li>
	<!-- Patterns -->
	<li>
		<a href="#">
			<span class="label">Patterns</span>
		</a>
		<ul>
			<!-- Pattern Overlay -->
        	<!-- <li>
                <a href="#">
                    <input type="checkbox" id="pattern-overlay" class="overlay"/>
                    <label class="label" for="pattern-overlay">Overlay</label>
				</a>
            </li>
            <li class="separator"></li> -->
            <!-- Pattern 0 -->
            <li>
                <a href="#">
                    <input type="checkbox" id="pattern-00-checkbox" class="pattern-checkbox" value="0"/>
	                <label class="label" for="pattern-00-checkbox">Vesica Pisces</label>
                </a>
        	</li>
        	<!-- Pattern 1 -->
        	<li>
                <a href="#">
                    <input type="checkbox" id="pattern-01-checkbox" class="pattern-checkbox" value="1"/>
	                <label class="label" for="pattern-01-checkbox">Seed of Life</label>
                </a>
        	</li>
        	<!-- Pattern 2 -->
        	<li>
                <a href="#">
                    <input type="checkbox" id="pattern-02-checkbox" class="pattern-checkbox" value="2"/>
	                <label class="label" for="pattern-02-checkbox">Fruit of Life</label>
                </a>
        	</li>
        	<!-- Pattern 3 -->
        	<li>
                <a href="#">
                    <input type="checkbox" id="pattern-03-checkbox" class="pattern-checkbox" value="3"/>
	                <label class="label" for="pattern-03-checkbox">Flower of Life</label>
                </a>
        	</li>
        	<!-- Pattern 4 -->
        	<li>
                <a href="#">
                    <input type="checkbox" id="pattern-04-checkbox" class="pattern-checkbox" value="4"/>
	                <label class="label" for="pattern-04-checkbox">Icosahedron</label>
                </a>
        	</li>
        	<!-- Pattern 5 -->
        	<li>
                <a href="#">
                    <input type="checkbox" id="pattern-05-checkbox" class="pattern-checkbox" value="5"/>
	                <label class="label" for="pattern-05-checkbox">Metatron's Cube</label>
                </a>
        	</li>
        	<!-- Pattern 6 -->
        	<li>
                <a href="#">
                    <input type="checkbox" id="pattern-06-checkbox" class="pattern-checkbox" value="6"/>
	                <label class="label" for="pattern-06-checkbox">Hexagon Formation</label>
                </a>
        	</li>
        	<!-- Pattern 8 -->
        	<li>
                <a href="#">
                    <input type="checkbox" id="pattern-07-checkbox" class="pattern-checkbox" value="7"/>
	                <label class="label" for="pattern-07-checkbox">Hexagonal Grid</label>
                </a>
        	</li>
        	<!-- Pattern 9 -->
        	<li>
                <a href="#">
                    <input type="checkbox" id="pattern-08-checkbox" class="pattern-checkbox" value="8"/>
	                <label class="label" for="pattern-08-checkbox">Dodecagram</label>
                </a>
        	</li>
        	<!-- Pattern 10 -->
        	<li>
                <a href="#">
                    <input type="checkbox" id="pattern-09-checkbox" class="pattern-checkbox" value="9"/>
	                <label class="label" for="pattern-09-checkbox">Vector Equilibrium</label>
                </a>
        	</li>
        </ul>
	</li>
	<!-- Settings -->
	<li>
		<a href="#">
			<span class="label">Settings</span>
		</a>
		<ul>
			<!-- Line -->
        	<li class="has-children">
                <a href="#">
	                <label class="label" for="line-settings">Line</label>
                </a>
                <ul>
                	<!-- Stroke -->
                    <li class="has-children">
                        <a href="#">
                        	<label class="label" for="line-stroke">Stroke</label>
						</a>
						<ul>
                        	<li>
                            	<a href="#">
                            		<input type="checkbox" id="line-stroke-solid-checkbox" class="line-stroke-type-settings" value="1"/>
                            		<label class="label" for="line-stroke-solid-checkbox">Solid</label>
								</a>
                        	</li>
                        	<li>
                            	<a href="#">
                            		<input type="checkbox" id="line-stroke-dashed-checkbox" class="line-stroke-type-settings" value="2"/>
                            		<label class="label" for="line-stroke-dashed-checkbox">Dashed</label>
								</a>
                        	</li>
                        	<li class="separator"></li>
                        	<li class="has-children">
                            	<a href="#">
                            		<label class="label" for="line-stroke-width">Width</label>
								</a>
								<ul>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="line-stroke-width-01-checkbox" class="line-stroke-width-settings" value="1"/>
	                                		<label class="label" for="line-stroke-width-01-checkbox">1</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="line-stroke-width-02-checkbox" class="line-stroke-width-settings" value="2"/>
	                                		<label class="label" for="line-stroke-width-02-checkbox">2</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="line-stroke-width-03-checkbox" class="line-stroke-width-settings" value="3"/>
	                                		<label class="label" for="line-stroke-width-03-checkbox">3</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="line-stroke-width-04-checkbox" class="line-stroke-width-settings" value="4"/>
	                                		<label class="label" for="line-stroke-width-04-checkbox">4</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="line-stroke-width-05-checkbox" class="line-stroke-width-settings" value="5"/>
	                                		<label class="label" for="line-stroke-width-05-checkbox">5</label>
	  									</a>
		                        	</li>
		                        </ul>
                        	</li>
                        </ul>
                    </li>
                </ul>
        	</li>
			<!-- Circle -->
        	<li class="has-children">
                <a href="#">
	                <label class="label" for="circle-settings">Circle</label>
                </a>
                <ul>
                	<!-- Stroke -->
                    <li class="has-children">
                        <a href="#">
                        	<label class="label" for="circle-stroke">Stroke</label>
						</a>
						<ul>
                        	<li>
                            	<a href="#">
                            		<input type="checkbox" id="circle-stroke-solid-checkbox" class="circle-stroke-type-settings" value="1"/>
                            		<label class="label" for="circle-stroke-solid-checkbox">Solid</label>
								</a>
                        	</li>
                        	<li>
                            	<a href="#">
                            		<input type="checkbox" id="circle-stroke-dashed-checkbox" class="circle-stroke-type-settings" value="2"/>
                        			<label class="label" for="circle-stroke-dashed-checkbox">Dashed</label>
								</a>
                        	</li>
                        	<li class="separator"></li>
                        	<li class="has-children">
                            	<a href="#">
                            		<label class="label" for="circle-stroke-width">Width</label>
								</a>
								<ul>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-stroke-width-01-checkbox" class="circle-stroke-width-settings" value="1"/>
	                                		<label class="label" for="circle-stroke-width-01-checkbox">1</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-stroke-width-02-checkbox" class="circle-stroke-width-settings" value="2"/>
	                                		<label class="label" for="circle-stroke-width-02-checkbox">2</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-stroke-width-03-checkbox" class="circle-stroke-width-settings" value="3"/>
	                                		<label class="label" for="circle-stroke-width-03-checkbox">3</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-stroke-width-04-checkbox" class="circle-stroke-width-settings" value="4"/>
	                                		<label class="label" for="circle-stroke-width-04-checkbox">4</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-stroke-width-05-checkbox" class="circle-stroke-width-settings" value="5"/>
	                                		<label class="label" for="circle-stroke-width-05-checkbox">5</label>
	  									</a>
		                        	</li>
		                        </ul>
                        	</li>
                        </ul>
                    </li>
                	<!-- Fill -->
                    <li class="has-children">
                        <a href="#">
                        	<label class="label" for="circle-fill">Fill</label>
						</a>
						<ul>
							<li>
                            	<a href="#">
                            		<input type="checkbox" id="circle-fill_type-empty-checkbox" class="circle-fill_type-settings" value="1"/>
                            		<label class="label" for="circle-fill_type-empty-checkbox">Empty</label>
								</a>
                        	</li>
                        	<li class="separator"></li>
                        	<li class="has-children">
                            	<a href="#">
                            		<input type="checkbox" id="circle-fill_type-solid-checkbox" class="circle-fill_type-settings" value="2"/>
                            		<label class="label" for="circle-fill_type-solid-checkbox">Solid</label>
								</a>
								<ul>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-solid-01-checkbox" class="circle-fill_color-solid-settings" value="1"/>
	                                		<label class="label" for="circle-fill_color-solid-01-checkbox">Purple</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-solid-02-checkbox" class="circle-fill_color-solid-settings" value="2"/>
	                                		<label class="label" for="circle-fill_color-solid-02-checkbox">Blue Purple</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-solid-03-checkbox" class="circle-fill_color-solid-settings" value="3"/>
	                                		<label class="label" for="circle-fill_color-solid-03-checkbox">Blue</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-solid-04-checkbox" class="circle-fill_color-solid-settings" value="4"/>
	                                		<label class="label" for="circle-fill_color-solid-04-checkbox">Blue Green</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-solid-05-checkbox" class="circle-fill_color-solid-settings" value="5"/>
	                                		<label class="label" for="circle-fill_color-solid-05-checkbox">Green</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-solid-06-checkbox" class="circle-fill_color-solid-settings" value="6"/>
	                                		<label class="label" for="circle-fill_color-solid-06-checkbox">Yellow Green</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-solid-07-checkbox" class="circle-fill_color-solid-settings" value="7"/>
	                                		<label class="label" for="circle-fill_color-solid-07-checkbox">Yellow</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-solid-08-checkbox" class="circle-fill_color-solid-settings" value="8"/>
	                                		<label class="label" for="circle-fill_color-solid-08-checkbox">Yellow Orange</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-solid-09-checkbox" class="circle-fill_color-solid-settings" value="9"/>
	                                		<label class="label" for="circle-fill_color-solid-09-checkbox">Orange</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-solid-10-checkbox" class="circle-fill_color-solid-settings" value="10"/>
	                                		<label class="label" for="circle-fill_color-solid-10-checkbox">Red Orange</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-solid-11-checkbox" class="circle-fill_color-solid-settings" value="11"/>
	                                		<label class="label" for="circle-fill_color-solid-11-checkbox">Red</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-solid-12-checkbox" class="circle-fill_color-solid-settings" value="12"/>
	                                		<label class="label" for="circle-fill_color-solid-12-checkbox">Red Purple</label>
	  									</a>
		                        	</li>
		                        </ul>
                        	</li>
                        	<li class="has-children">
                            	<a href="#">
                            		<input type="checkbox" id="circle-fill_type-gradient-checkbox" class="circle-fill_type-settings" value="3"/>
                            		<label class="label" for="circle-fill_type-gradient-checkbox">Gradient</label>
								</a>
								<ul>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-gradient-01-checkbox" class="circle-fill_color-gradient-settings" value="1"/>
	                                		<label class="label" for="circle-fill_color-gradient-01-checkbox">Purple</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-gradient-02-checkbox" class="circle-fill_color-gradient-settings" value="2"/>
	                                		<label class="label" for="circle-fill_color-gradient-02-checkbox">Blue Purple</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-gradient-03-checkbox" class="circle-fill_color-gradient-settings" value="3"/>
	                                		<label class="label" for="circle-fill_color-gradient-03-checkbox">Blue</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-gradient-04-checkbox" class="circle-fill_color-gradient-settings" value="4"/>
	                                		<label class="label" for="circle-fill_color-gradient-04-checkbox">Blue Green</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-gradient-05-checkbox" class="circle-fill_color-gradient-settings" value="5"/>
	                                		<label class="label" for="circle-fill_color-gradient-05-checkbox">Green</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-gradient-06-checkbox" class="circle-fill_color-gradient-settings" value="6"/>
	                                		<label class="label" for="circle-fill_color-gradient-06-checkbox">Yellow Green</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-gradient-07-checkbox" class="circle-fill_color-gradient-settings" value="7"/>
	                                		<label class="label" for="circle-fill_color-gradient-07-checkbox">Yellow</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-gradient-08-checkbox" class="circle-fill_color-gradient-settings" value="8"/>
	                                		<label class="label" for="circle-fill_color-gradient-08-checkbox">Yellow Orange</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-gradient-09-checkbox" class="circle-fill_color-gradient-settings" value="9"/>
	                                		<label class="label" for="circle-fill_color-gradient-09-checkbox">Orange</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-gradient-10-checkbox" class="circle-fill_color-gradient-settings" value="10"/>
	                                		<label class="label" for="circle-fill_color-gradient-10-checkbox">Red Orange</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-gradient-11-checkbox" class="circle-fill_color-gradient-settings" value="11"/>
	                                		<label class="label" for="circle-fill_color-gradient-11-checkbox">Red</label>
	  									</a>
		                        	</li>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-gradient-12-checkbox" class="circle-fill_color-gradient-settings" value="12"/>
	                                		<label class="label" for="circle-fill_color-gradient-12-checkbox">Red Purple</label>
	  									</a>
		                        	</li>
		                        </ul>
                        	</li>
                        	<li class="separator"></li>
                        	<li>
                            	<a href="#">
                            		<input type="checkbox" id="circle-fill_type-profile-checkbox" class="circle-fill_type-settings" value="4"/>
                            		<label class="label" for="circle-fill_type-profile-checkbox">Profile</label>
								</a>
								<ul>
		                        	<li>
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-profile-01-checkbox" class="circle-fill_color-profile-settings" value="1"/>
	                                		<label class="label" for="circle-fill_color-profile-01-checkbox">1</label>
	  									</a>
		                        	</li>
		                        	<li class="disabled">
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-profile-02-checkbox" class="circle-fill_color-profile-settings" value="2"/>
	                                		<label class="label" for="circle-fill_color-profile-02-checkbox">2</label>
	  									</a>
		                        	</li>
		                        	<li class="disabled">
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-profile-03-checkbox" class="circle-fill_color-profile-settings" value="3"/>
	                                		<label class="label" for="circle-fill_color-profile-03-checkbox">3</label>
	  									</a>
		                        	</li>
		                        	<li class="disabled">
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-profile-04-checkbox" class="circle-fill_color-profile-settings" value="4"/>
	                                		<label class="label" for="circle-fill_color-profile-04-checkbox">4</label>
	  									</a>
		                        	</li>
		                        	<li class="disabled">
		                            	<a href="#">
	                                		<input type="checkbox" id="circle-fill_color-profile-05-checkbox" class="circle-fill_color-profile-settings" value="5"/>
	                                		<label class="label" for="circle-fill_color-profile-05-checkbox">5</label>
	  									</a>
		                        	</li>
		                        </ul>
                        	</li>
                        </ul>
                    </li>
                </ul>
        	</li>
        	<li class="separator"></li>
        	<!-- Underlay -->
        	<li class="has-children">
                <a href="#">
	                <label class="label" for="underlay-settings">Underlay</label>
                </a>
                <ul>
                	<!-- Toggle -->
                    <li>
                        <a href="#">
                    		<input type="checkbox" id="underlay-enabled-checkbox" class="underlay-settings" value="1"/>
                    		<label class="label" for="underlay-enabled-checkbox">Enabled</label>
						</a>
					</li>
                </ul>
        	</li>
        	<li class="separator"></li>
        	<li>
                <a href="#">
                    <span class="label" id="about">About</span>
                </a>
        	</li>
        </ul>
	</li>
</ul>`;

document.getElementsByClassName('flyout-nav')[0].innerHTML = menu;