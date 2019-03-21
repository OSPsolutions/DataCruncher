/*
 * Copyright (c) 2019  Altimari Mario
 * All rights reserved
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Modulus 11 <b>ISBN-10</b> Check Digit calculation/validation.
 * <p>
 * ISBN-10 Numbers are a numeric code except for the last (check) digit
 * which can have a value of "X".
 * <p>
 * Check digit calculation is based on <i>modulus 11</i> with digits being weighted
 * based by their position, from right to left  with the first digit being weighted
 * 1, the second 2 and so on. If the check digit is calculated as "10" it is converted
 * to "X".
 * <p>
 * <b>N.B.</b> From 1st January 2007 the book industry will start to use a new 13 digit
 * ISBN number (rather than this 10 digit ISBN number) which uses the EAN-13 / UPC
 * (see {@link com.seer.datacruncher.utils.validation.EAN13CheckDigit}) standard.
 * <p>
 * For further information see:
 * <ul>
 *   <li><a href="http://en.wikipedia.org/wiki/ISBN">Wikipedia - International
 *       Standard Book Number (ISBN)</a>.</li>
 *   <li><a href="http://www.isbn.org/standards/home/isbn/transition.asp">ISBN-13
 *       Transition details</a>.</li>
 * </ul>
 *
 * @version $Revision$ $Date$
 * @since Validator 1.4
 */
package com.seer.datacruncher.utils.validation;

public final class ISBN10CheckDigit extends ModulusCheckDigit {

    /** Singleton ISBN-10 Check Digit instance */
    public static final CheckDigit ISBN10_CHECK_DIGIT = new ISBN10CheckDigit();

    /**
     * Construct a modulus 11 Check Digit routine for ISBN-10.
     */
    public ISBN10CheckDigit() {
        super(11);
    }

    /**
     * Calculates the <i>weighted</i> value of a charcter in the
     * code at a specified position.
     *
     * <p>For ISBN-10 (from right to left) digits are weighted
     * by their position.</p>
     *
     * @param charValue The numeric value of the character.
     * @param leftPos The position of the character in the code, counting from left to right 
     * @param rightPos The positionof the character in the code, counting from right to left
     * @return The weighted value of the character.
     */
    protected int weightedValue(int charValue, int leftPos, int rightPos) {
        return (charValue * rightPos);
    }

    /**
     * <p>Convert a character at a specified position to an
     * integer value.</p>
     *
     * <p>Character 'X' check digit converted to 10.</p>
     *
     * @param character The character to convert.
     * @param leftPos The position of the character in the code, counting from left to right 
     * @param rightPos The positionof the character in the code, counting from right to left
     * @return The integer value of the character.
     * @throws com.seer.datacruncher.utils.validation.CheckDigitException if an error occurs.
     */
    protected int toInt(char character, int leftPos, int rightPos)
            throws CheckDigitException {
        if (rightPos == 1 && character == 'X') {
            return 10;
        } else {
            return super.toInt(character, leftPos, rightPos);
        }
    }

    /**
     * <p>Convert an integer value to a character at a specified position.</p>
     *
     * <p>Value '10' for position 1 (check digit) converted to 'X'.</p>
     *
     * @param charValue The integer value of the character.
     * @return The converted character.
     * @throws CheckDigitException if an error occurs.
     */
    protected String toCheckDigit(int charValue)
            throws CheckDigitException {
        if (charValue == 10) {
            return "X";
        } else {
            return super.toCheckDigit(charValue);
        }
    }

}