/* REACT */
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'

/* m */
import BaseText from '../../Text'

/* CONFIGS */
import CONFIG from '../../../сonfigs/main.config'

/* STYLES */
import styles from './styles'
import { useColors } from '../../../theme/themeHooks'

const HeaderRightTape = () => {
  const [visible, setVisible] = useState(true)
  const { error } = useColors()
  console.log('headerRightTape')

  // ==================
  // ===== RENDER =====
  // ==================

  if (!visible) {
    return null
  }

  return ['dev'].includes(CONFIG.ENV) ? (
    <TouchableOpacity
      testID="headerRightTape"
      style={[styles.tape, { backgroundColor: error }]}
      onLongPress={() => setVisible(false)}
    >
      <BaseText style={styles.title} numberOfLines={2}>
        {`${CONFIG.ENV}`}
      </BaseText>
    </TouchableOpacity>
  ) : null
}

export default HeaderRightTape
